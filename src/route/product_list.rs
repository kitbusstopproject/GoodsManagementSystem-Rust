use yew::prelude::*;
use material_yew::MatButton;

#[function_component(App)]
pub fn product_list(id: u32) -> Html {
    html! {
        <main>
            <h1>{ "Product List" }</h1>
            <MatButton label="Click me!" icon={AttrValue::from("code")} />
        </main>
    }
}