use yew::prelude::*;
use material_yew::MatButton;

#[derive(Clone, Properties, PartialEq)]
pub struct ProductDetailProps {
    pub id: u32,
}

#[function_component(App)]
pub fn product_detail(props: &ProductDetailProps) -> Html {
    html! {
        <main>
            <h1>{ "Product Detail" }</h1>
            <h1>{ format!("Product ID: {:?}", props.id) }</h1>
            <MatButton label="Click me!" icon={AttrValue::from("code")} />
        </main>
    }
}