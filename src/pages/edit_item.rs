use atoms::{InputForm, Modal};
use firestore_hooks::{use_document, NotFetched};
use firestore::{update_document, delete_document};
use model::Item;
use yew::prelude::*;

#[derive(Default, Clone, Debug, PartialEq)]
struct FormData {
    item_name: String,
    maker: String,
    model_number: String,
    supplier: String,
}

#[derive(Clone, Properties, PartialEq)]
pub struct EditItemProps {
    pub id: String,
}

#[function_component(App)]
pub fn edit_item(props: &EditItemProps) -> Html {    
    let item_name = use_mut_ref(|| "".to_string());
    let maker = use_mut_ref(|| "".to_string());
    let model_number = use_mut_ref(|| "".to_string());
    let supplier = use_mut_ref(|| "".to_string());

    let item = use_document::<Item>(
        &"".to_string(),
        &props.id
    );
    let state = (|| Ok(item?))();
    match state {
        Err(NotFetched::Loading) => {
            return html! { <div>{ "Loading..." }</div> }
        }
        Err(NotFetched::Error) => {
            return html! { <div>{ "エラーが発生しました" }</div> }
        }
        Ok(item) => {
            let item_name_str = item_name.borrow().clone();
            let maker_str = maker.borrow().clone();
            let model_number_str = model_number.borrow().clone();
            let supplier_str = supplier.borrow().clone();

            let on_input_item_name = Callback::from(move |e: InputEvent|{
                let input_text = e
                    .target_dyn_into::<web_sys::HtmlInputElement>()
                    .unwrap()
                    .value();
                *item_name.borrow_mut() = input_text.clone();
            });

            let on_input_maker = Callback::from(move |e: InputEvent|{
                let input_text = e
                    .target_dyn_into::<web_sys::HtmlInputElement>()
                    .unwrap()
                    .value();
                *maker.borrow_mut() = input_text.clone();
            });

            let on_input_model_number = Callback::from(move |e: InputEvent|{
                let input_text = e
                    .target_dyn_into::<web_sys::HtmlInputElement>()
                    .unwrap()
                    .value();
                *model_number.borrow_mut() = input_text.clone();
            });

            let on_input_supplier = Callback::from(move |e: InputEvent|{
                let input_text = e
                    .target_dyn_into::<web_sys::HtmlInputElement>()
                    .unwrap()
                    .value();
                *supplier.borrow_mut() = input_text.clone();
            });
            let item_id = item.id.clone();
            let onsubmit = Callback::from(move|e: SubmitEvent|{
                e.prevent_default();
                let item_data = Item {
                    id: item.id.clone(),
                    category: item.category.clone(),
                    registered_date: item.registered_date.clone(),
                    is_lending: item.is_lending.clone(),
                    lending_log_id: item.lending_log_id.clone(),
                    item_name: item_name_str.clone(),
                    maker: maker_str.clone(),
                    model_number: model_number_str.clone(),
                    supplier: supplier_str.clone(),
                };
                log::info!("item_data: {:?}", item_data);
                let doc_id = item.id.clone();

                update_document::<Item>(
                    &"".to_string(),
                    &doc_id,
                    &item_data,
                    || {},
                    || {},
                );
            });

            let onclick_delete = Callback::from(move|e: MouseEvent|{
                e.prevent_default();
                let doc_id = item_id.clone();
                delete_document::<Item>(
                    &"".to_string(),
                    &doc_id,
                    || {},
                    || {},
                );
            });

            html! {
                <div class="">
                    <h1 class="text-2xl font-bold mb-6">{ "編集" }</h1>
                    <form 
                    // onsubmit={onsubmit}
                    >
                        <div class="flex flex-col w-100">
                            <InputForm id="item_name" label="名称" placeholder={item.item_name.clone()} oninput={on_input_item_name}/>
                            <InputForm id="maker" label="メーカー" placeholder={item.maker.clone()} oninput={on_input_maker} />
                            <InputForm id="model_number" label="モデル番号" placeholder={item.model_number.clone()} oninput={on_input_model_number} />
                            <InputForm id="supplier" label="購入元" placeholder={item.supplier.clone()} oninput={on_input_supplier} />

                            <div class="flex justify-evenly">
                                <button 
                                    data-modal-target="modal"
                                    data-modal-toggle="modal"
                                    class="rounded-md bg-action hover:bg-action-hover font-bold py-4 px-8"
                                    type="submit"
                                    >
                                    { "更新" }
                                </button>
                                <button 
                                    type="button"
                                    // onclick={onclick_delete}
                                    class="rounded-md bg-white hover:bg-gray-100 border border-error text-error font-bold py-4 px-8">
                                    { "削除" }
                                </button>
                            </div>
                        </div>
                    </form>
                    // <Modal 
                    //     id="modal"
                    //     tabindex={-1}
                    //     hidden={false}
                    // >
                    //     <span>{"aiueo"}</span>
                    // </Modal>
                //     <MatDialog
                //     heading={AttrValue::from("以下のフィールドを更新します")} 
                //     dialog_link={self.update_dialog_link.clone()}
                    
                //     >
                //     <MatDialogAction>
                //    </MatDialog>
                </div>
            }
        }
    }
}
