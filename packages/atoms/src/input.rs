use web_sys::{EventTarget, HtmlInputElement};
use wasm_bindgen::JsCast;
use yew::prelude::*;


#[derive(Clone, Properties, PartialEq)]
pub struct InputProps {
    pub id: String,
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
        <div class="mb-6">
            <label for={props.id.clone()} class="block text-md font-medium" >
                {&props.label}
                <br />
                <input
                    id={props.id.clone()}
                    class="p-2.5 text-black w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gra"
                    type="text"
                    placeholder={props.value.clone()}
                    value={value.clone()}
                    onchange={on_change}
                />
            </label>
        </div>

    }
}