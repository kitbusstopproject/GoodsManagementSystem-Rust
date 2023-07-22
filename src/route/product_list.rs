use yew::prelude::*;
use material_yew::MatButton;

#[function_component(App)]
pub fn product_list() -> Html {
    html! {
        <main>
            <h1>{ "Product List" }</h1>
            <span onclick={Callback::from(|_| { log::info!("Clicked!"); })}>
                <MatButton 
                    label={"Click me!"}
                    icon={AttrValue::from("code")}
                />
            </span>
        </main>
    }
}