use web_sys::{EventTarget, HtmlInputElement};
use wasm_bindgen::JsCast;
use yew::prelude::*;


#[derive(Clone, Properties, PartialEq)]
pub struct InputProps {
    pub label: String,
    pub value: String,
}

#[function_component(InputForm)]
pub fn input(props: &InputProps) -> Html {
    let value_handle = use_state(|| props.value.clone());
    let value = (*value_handle).clone();
    
    let on_change = {
        let value_handle = value_handle.clone();
        Callback::from(move |e: Event| {
            let target: Option<EventTarget> = e.target();
            let input = target.and_then(|t| t.dyn_into::<HtmlInputElement>().ok());

            if let Some(input) = input {
                value_handle.set(input.value());
            }
        })
    };

    html! {
        <div class="my-4">
            <label for={props.label.clone()} class="text-bold">
                {format!{"{}", props.label}}
                <br />
                <input
                    id={props.label.clone()}
                    class="px-2 py-1"
                    type="text"
                    value={value.clone()}
                    onchange={on_change}
                />
            </label>
        </div>

    }
}