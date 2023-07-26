use atoms::InputForm;
use firestore_hooks::{use_document, NotFetched};
use model::Item;
use yew::prelude::*;

#[derive(Clone, Properties, PartialEq)]
pub struct EditItemProps {
    pub id: String,
}

#[function_component(App)]
pub fn edit_item(props: &EditItemProps) -> Html {
    let item = use_document::<Item>(
        &"".to_string(),
        &props.id
    );
    log::info!("item: {:?}", item);
    let state = (|| Ok(item?))();
    match state {
        Err(NotFetched::Loading) => {
            return html! { <div>{ "Loading..." }</div> }
        }
        Err(NotFetched::Error) => {
            return html! { <div>{ "エラーが発生しました" }</div> }
        }
        Ok(item) => {
            html! {
                <div class="">
                    <h1 class="text-2xl">{ "Edit Item" }</h1>
                    <div class="flex flex-col">
                        <InputForm id="item_name" label="名称" value={item.item_name.clone()} />
                        <InputForm id="maker" label="メーカー" value={item.maker.clone()} />
                        <InputForm id="model_number" label="モデル番号" value={item.model_number.clone()} />
                        <InputForm id="supplier" label="購入元" value={item.supplier.clone()} />
                    </div>
                </div>
            }
        }
    }
    
}

