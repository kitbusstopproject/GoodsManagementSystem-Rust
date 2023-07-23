use yew::prelude::*;
use material_yew::MatButton;

use firestore_hooks::{use_document, use_collection, NotFetched};
use model::Item;

#[function_component(App)]
pub fn product_list() -> Html {
    let data = use_document::<Item>(
        &"".to_string(),
        "iY3FmgCEIAdEAzWPGSd6"
    );
    let col = use_collection::<Item>(
        &"".to_string(),
    );
    log::info!("col: {:?}", col);
    log::info!("data: {:?}", data);
    html! {
        <main>
            <h1>{ "Product List" }</h1>
            <span onclick={Callback::from(|_| { log::info!("Clicked!"); })}>
                <MatButton 
                    label={"Click me!"}
                    icon={AttrValue::from("code")}
                />
            </span>
            <br />
            <a href="product/1">{ "Product 1" }</a>
        </main>
    }
}