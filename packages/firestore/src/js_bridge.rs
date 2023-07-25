use wasm_bindgen::{
    prelude::{wasm_bindgen, Closure},
    JsValue,
};

#[wasm_bindgen()]
extern "C" {
    #[wasm_bindgen(js_name = "addDocument",js_namespace = ["window","_wasm_js_bridge"])]
    fn addDocument(path: &str, data: &str, on_complete: &JsValue, on_error: &JsValue) -> String;
    #[wasm_bindgen(js_name = "getCollection",js_namespace = ["window","_wasm_js_bridge"])]
    fn getCollection(path: &str, on_complete: &JsValue, on_error: &JsValue);
    #[wasm_bindgen(js_name = "getDocument",js_namespace = ["window","_wasm_js_bridge"])]
    fn getDocument(path: &str, on_complete: &JsValue, on_error: &JsValue);
}

pub fn add_document(
    path: &str,
    json: &str,
    on_complete: impl FnOnce(&str) + 'static,
    on_error: impl FnOnce() + 'static,
) -> String {
    let on_complete: JsValue = Closure::once_into_js(|val: JsValue| {
        on_complete(&val.as_string().unwrap());
    });
    let on_error: JsValue = Closure::once_into_js(on_error);
    addDocument(path, json, &on_complete, &on_error)
}

pub fn get_collection_json(
    path: &str,
    on_complete: impl FnOnce(&str) + 'static,
    on_error: impl FnOnce() + 'static,
) {
    let on_complete: JsValue = Closure::once_into_js(|val: JsValue| {
        on_complete(&val.as_string().unwrap());
    });
    let on_error: JsValue = Closure::once_into_js(on_error);
    getCollection(path, &on_complete, &on_error)
}

pub fn get_document_json(
    path: &str,
    on_complete: impl FnOnce(&str) + 'static,
    on_error: impl FnOnce() + 'static,
) {
    let on_complete: JsValue = Closure::once_into_js(|val: JsValue| {
        on_complete(&val.as_string().unwrap());
    });
    let on_error: JsValue = Closure::once_into_js(on_error);
    getDocument(path, &on_complete, &on_error)
}