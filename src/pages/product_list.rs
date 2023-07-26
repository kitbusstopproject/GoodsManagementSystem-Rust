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
                let lending_state = if item.is_lending {
                    "貸出中"
                } else {
                    "-"
                };
                html! {
                    <tr>
                        <td>{ &item.item_name }</td>
                        <td>{ &item.category }</td>
                        <td>{ date }</td>
                        <td>{ lending_state }</td>
                        <td>{ &item.model_number }</td>
                        <td>{ &item.maker }</td>
                        <td>{ &item.supplier }</td>
                        <td><a href={format!("product/{}", item.id)}>{ "Edit" }</a></td>
                    </tr>
                }
            });
            
            html! {
                <main class={"flex flex-col bg-screen p-2"}>
                    <h1 class={"text-word text-4xl"}>{ "Product List" }</h1>
                    <table class={"table text-left divide-y divide-word"}>
                        <thead>
                            <tr class={ "bg-screen-2nd border-bottom" }>
                                <th>{ "名称" }</th>
                                <th>{ "カテゴリ" }</th>
                                <th>{ "登録日" }</th>
                                <th>{ "貸出状況" }</th>
                                <th>{ "モデル番号" }</th>
                                <th>{ "メーカー" }</th>
                                <th>{ "購入元" }</th>
                                <th>{""}</th>
                            </tr>
                        </thead>
                        <tbody>
                            { for table_rows }
                        </tbody>
                    </table>
                </main>
            }
        }
    }
}