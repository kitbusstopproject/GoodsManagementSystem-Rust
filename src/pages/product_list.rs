use chrono::{TimeZone, Local};
use yew::prelude::*;

use firestore_hooks::{use_collection, NotFetched};
use model::Item;



#[function_component(App)]
pub fn product_list() -> Html {
    let docs = use_collection::<Item>(
        &"".to_string(),
    );
    log::info!("col: {:?}", docs);
    let state = (|| Ok(docs?))();
    match state {
        Err(NotFetched::Loading) => {
            return html! { <div>{ "Loading..." }</div> }
        }
        Err(NotFetched::Error) => {
            return html! { <div>{ "エラーが発生しました" }</div> }
        }
        Ok(docs) => {
            let table_rows = docs.iter().map(|item| {
                let date = Local.timestamp_opt(
                    item.registered_date.seconds as i64,
                    item.registered_date.nanoseconds as u32)
                    .unwrap().to_string();
                let (date, _) = date.split_at(19);
                
                html! {
                    <tr>
                        <td>{ &item.item_name }</td>
                        <td>{ &item.category }</td>
                        <td>{ date }</td>
                        <td>{ &item.model_number }</td>
                        <td>{ &item.maker }</td>
                        <td>{ &item.supplier }</td>
                    </tr>
                }
            });
            
            html! {
                <main class={classes!("flex", "flex-col", "bg-screen")}>
                    <h1 class={classes!("text-word", "text-4xl")}>{ "Product List" }</h1>
                    <table class={classes!("table-auto")}>
                        <tr class={ "bg-screen-2nd" }>
                            <th>{ "名称" }</th>
                            <th>{ "カテゴリ" }</th>
                            <th>{ "登録日" }</th>
                            <th>{ "モデル番号" }</th>
                            <th>{ "メーカー" }</th>
                            <th>{ "購入元" }</th>
                        </tr>
                        { for table_rows }
                    </table>
                </main>
            }
        }
    }
}