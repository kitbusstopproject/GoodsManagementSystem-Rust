use atoms::{InputForm, Modal};
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
                    <h1 class="text-2xl font-bold mb-6">{ "編集" }</h1>
                    <form>
                        <div class="flex flex-col w-100">
                            <InputForm id="item_name" label="名称" value={item.item_name.clone()} />
                            <InputForm id="maker" label="メーカー" value={item.maker.clone()} />
                            <InputForm id="model_number" label="モデル番号" value={item.model_number.clone()} />
                            <InputForm id="supplier" label="購入元" value={item.supplier.clone()} />

                            <div class="flex justify-evenly">
                                <button 
                                    data-modal-target="modal"
                                    data-modal-toggle="modal"
                                    class="rounded-md bg-action hover:bg-action-hover font-bold py-4 px-8"
                                    type="button">
                                    { "更新" }
                                </button>
                                <button 
                                    type="button"
                                    class="rounded-md bg-white hover:bg-gray-100 border border-error text-error font-bold py-4 px-8">
                                    { "削除" }
                                </button>
                            </div>
                        </div>
                    </form>
                    <Modal 
                        id="modal"
                        tabindex={-1}
                        hidden={false}
                    >
                        <span>{"aiueo"}</span>
                    </Modal>
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
