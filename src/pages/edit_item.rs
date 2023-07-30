use atoms::{InputForm, Modal};
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
    let is_show = use_state(|| false);
    let show_modal = {
        let is_show = is_show.clone();
        Callback::from(move|_e: MouseEvent| {
            is_show.set(true);
        })
    };
    let close_modal = {
        let is_show = is_show.clone();
        Callback::from(move|_e: MouseEvent| {
            is_show.set(false);
        })
    };

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
            let onsubmit = Callback::from(move|e: MouseEvent|{
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

            let onclick_delete = {
                Callback::from(move|e: MouseEvent|{
                    e.prevent_default();
                    let doc_id = item_id.clone();
                    delete_document::<Item>(
                        &"".to_string(),
                        &doc_id,
                        || {},
                        || {},
                    );
                })
            };

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
                                    onclick={show_modal.clone()}
                                    class="rounded-md bg-white hover:bg-gray-100 border border-error text-error font-bold py-4 px-8">
                                    { "削除" }
                                </button>
                            </div>
                        </div>
                    </form>
                    // Modal
                    if *is_show {
                        <div 
                            id="defaultModal" 
                            class="bg-gray-900/30 fixed flex items-center justify-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-100 max-h-full"
                            onclick={close_modal.clone()}
                            >
                            <div>

                                <div class="relative w-full max-w-2xl max-h-full bg-screen ">
                                    <div class="relative bg-screen-2nd rounded-lg shadow">
                                        <div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                                        <h3 class="font-bold text-2xl text-error">
                                            {"本当に削除しますか？"}
                                        </h3>
                                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-4 h-4 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                </svg>
                                                <span class="sr-only">{"Close modal"}</span>
                                            </button>
                                        </div>
                                        
                                        <div class="flex items-center justify-evenly p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                            <button 
                                                data-modal-hide="defaultModal" 
                                                type="click" 
                                                class="bg-white text-error border-error focus:ring-4 focus:outline-none focus:ring-error font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
                                                onclick={onclick_delete.clone()}
                                                >{"削除する"}
                                            </button>
                                            <button 
                                                data-modal-hide="defaultModal" 
                                                type="button" 
                                                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" 
                                                label="Decline" >
                                                {"キャンセル"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            }
        }
    }
}
