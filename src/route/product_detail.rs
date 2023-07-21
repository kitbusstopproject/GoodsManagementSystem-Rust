use yew::prelude::*;
use material_yew::MatButton;

#[function_component(App)]
pub fn product_detail() -> Html {
    html! {
        <main>
            <h1>{ "Product Detail" }</h1>
            <MatButton label="Click me!" icon={AttrValue::from("code")} />
        </main>
    }
}