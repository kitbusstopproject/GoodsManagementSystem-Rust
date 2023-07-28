use atoms::InputForm;
use firestore_hooks::{use_document, NotFetched};
use firestore::{update_document, delete_document};
use material_yew::{MatDialog, WeakComponentLink, dialog::{MatDialogAction, ActionType}};
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

pub struct Dialog {
    basic_dialog_link: WeakComponentLink<MatDialog>,
    action_dialog_link: WeakComponentLink<MatDialog>,
    scrollable_dialog_link: WeakComponentLink<MatDialog>,
    hide_action_dialog_link: WeakComponentLink<MatDialog>,
    stacked_dialog_link: WeakComponentLink<MatDialog>,
    hide_actions: bool,
}

pub enum Msg {
    ShowBasicDialog,
    ShowActionDialog,
    ShowScrollableDialog,
    ShowHideActionDialog,
    ShowStackedDialog,
    HideActions,
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
            // 初期化
            *item_name.borrow_mut() = item.item_name.clone();
            *maker.borrow_mut() = item.maker.clone();
            *model_number.borrow_mut() = item.model_number.clone();
            *supplier.borrow_mut() = item.supplier.clone();

            let on_input_item_name = {
                let item_name = item_name.clone();
                    Callback::from(move |e: InputEvent| {
                    let input_text = e
                        .target_dyn_into::<web_sys::HtmlInputElement>()
                        .unwrap()
                        .value();
                    *item_name.borrow_mut() = input_text.clone();
                })
            };

            let on_input_maker = {
                let maker = maker.clone();
                Callback::from(move |e: InputEvent|{
                    let input_text = e
                        .target_dyn_into::<web_sys::HtmlInputElement>()
                        .unwrap()
                        .value();
                    *maker.borrow_mut() = input_text.clone();
                })
            };

            let on_input_model_number = {
                let model_number = model_number.clone();
                Callback::from(move |e: InputEvent| {
                    let input_text = e
                        .target_dyn_into::<web_sys::HtmlInputElement>()
                        .unwrap()
                        .value();
                    *model_number.borrow_mut() = input_text.clone();
                })
            };

            let on_input_supplier = { 
                let supplier = supplier.clone();
                Callback::from(move |e: InputEvent| {
                    let input_text = e
                        .target_dyn_into::<web_sys::HtmlInputElement>()
                        .unwrap()
                        .value();
                    *supplier.borrow_mut() = input_text.clone();
                })
            };

            let item_id = item.id.clone();
            let onsubmit = Callback::from(move|e: SubmitEvent|{
                e.prevent_default();
                let item_data = Item {
                    id: item.id.clone(),
                    category: item.category.clone(),
                    registered_date: item.registered_date.clone(),
                    is_lending: item.is_lending.clone(),
                    lending_log_id: item.lending_log_id.clone(),
                    item_name: item_name.borrow().clone(),
                    maker: maker.borrow().clone(),
                    model_number: model_number.borrow().clone(),
                    supplier: supplier.borrow().clone(),
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
                    onsubmit={onsubmit}
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
                                    onclick={onclick_delete}
                                    class="rounded-md bg-white hover:bg-gray-100 border border-error text-error font-bold py-4 px-8">
                                    { "削除" }
                                </button>
                            </div>
                        </div>
                    </form>
                    // Modal
                //     <section>
                //         <span onclick={Callback::from(|_| Msg::ShowBasicDialog)}>
                //             <button 
                //                 label="Basic" 
                //                 class="bg-action hover:bg-action-hover text-white font-bold py-4 px-8 rounded-md"
                //                 />
                //         </span>
                //         <MatDialog 
                //             heading={AttrValue::from("Dialog header")} 
                //             dialog_link={Dialog.basic_dialog_link.clone()}
                //             >
                //             {"Dialog body text"}
                //             <MatDialogAction action_type={ActionType::Primary} action={AttrValue::from("ok")}>
                //                 <button label="更新する" class="bg-action hover:bg-action-hover text-white font-bold py-4 px-8 rounded-md" />
                //             </MatDialogAction>
                //             <MatDialogAction action_type={ActionType::Secondary} action={AttrValue::from("cancel")}>
                //                 <button label="やめます……" class="bg-action hover:bg-action-hover text-white font-bold py-4 px-8 rounded-md" />
                //             </MatDialogAction>
                //         </MatDialog>
                //     </section>
                </div>
            }
        }
    }
}
