use std::{cell::RefCell, rc::Rc};

use serde::{de::DeserializeOwned, Serialize};
use web_sys::console;

mod js_bridge;
pub trait FireStoreResource
where
    Self: DeserializeOwned + Serialize,
{
    type ParamForPath;
    fn path(param: &Self::ParamForPath) -> String;
}

pub fn get_collection<T>(
    param: &T::ParamForPath,
    on_complete: impl FnOnce(Vec<T>) + 'static,
    on_error: impl FnMut() + 'static,
) where
    T: FireStoreResource,
{
    let on_error = Rc::new(RefCell::new(Box::new(on_error) as Box<dyn FnMut()>));
    let on_parse_error = on_error.clone();
    let callback = move |json: &str| {
        let result: Result<Vec<T>, _> = serde_json::from_str(json);
        match result {
            Ok(t) => on_complete(t),
            Err(e) => {
                console::log_1(&e.to_string().into());
                on_parse_error.borrow_mut()();
            }
        }
    };
    let on_error = move || on_error.borrow_mut()();
    crate::js_bridge::get_collection_json(T::path(param).as_str(), callback, on_error)
}

pub fn get_document<T>(
    params: &T::ParamForPath,
    document_id: &str,
    on_complete: impl FnOnce(T) + 'static,
    on_error: impl FnMut() + 'static,
) where
    T: FireStoreResource,
{
    let on_error = Rc::new(RefCell::new(Box::new(on_error) as Box<dyn FnMut()>));
    let on_parse_error = on_error.clone();
    let callback = move |json: &str| match serde_json::from_str(json) {
        Ok(t) => on_complete(t),
        Err(e) => {
            console::log_1(&e.to_string().into());
            on_parse_error.borrow_mut()();
        }
    };
    let on_error = move || on_error.borrow_mut()();
    crate::js_bridge::get_document_json(
        (T::path(params) + "/" + document_id).as_str(),
        callback,
        on_error,
    )
}

pub fn add_document<T>(
    params: &T::ParamForPath,
    document: &T,
    on_complete: impl FnOnce(&str) + 'static,
    on_error: impl FnMut() + 'static,
) -> String
where
    T: FireStoreResource,
{
    crate::js_bridge::add_document(
        T::path(params).as_str(),
        serde_json::to_string(document).unwrap().as_str(),
        on_complete,
        on_error,
    )
}

pub fn update_document<T>(
    params: &T::ParamForPath,
    document_id: &str,
    document: &T,
    on_complete: impl FnOnce() + 'static,
    on_error: impl FnMut() + 'static,
) where
    T: FireStoreResource,
{
    crate::js_bridge::update_document(
        (T::path(params) + "/" + document_id).as_str(),
        serde_json::to_string(document).unwrap().as_str(),
        on_complete,
        on_error,
    )
}

pub fn delete_document<T>(
    params: &T::ParamForPath,
    document_id: &str,
    on_complete: impl FnOnce() + 'static,
    on_error: impl FnMut() + 'static,
) where
    T: FireStoreResource,
{
    crate::js_bridge::delete_document(
        (T::path(params) + "/" + document_id).as_str(),
        on_complete,
        on_error,
    )
}