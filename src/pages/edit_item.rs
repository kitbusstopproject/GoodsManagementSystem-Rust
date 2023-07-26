use yew::prelude::*;
use material_yew::MatButton;

#[derive(Clone, Properties, PartialEq)]
pub struct EditItemProps {
    pub id: String,
}

#[function_component(App)]
pub fn edit_item(props: &EditItemProps) -> Html {
    html! {
        <main>
            <h1>{ "Edit Item" }</h1>
            <h1>{ format!("Product ID: {:?}", props.id) }</h1>
            <MatButton label="Click me!" icon={AttrValue::from("code")} />
        </main>
    }
}