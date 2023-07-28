use chrono::{TimeZone, Local};
use yew::prelude::*;

use firestore_hooks::{use_collection, NotFetched};
use model::Item;
use yew_router::components::Link;

use crate::Route;

#[function_component(App)]
pub fn product_list() -> Html {
    let docs = use_collection::<Item>(
        &"".to_string(),
    );
    let show_lending = use_state(|| false);
    let state = (|| Ok(docs?))();
    match state {
        Err(NotFetched::Loading) => {
            return html! { <div>{ "Loading..." }</div> }
        }
        Err(NotFetched::Error) => {
            return html! { <div>{ "エラーが発生しました" }</div> }
        }
        Ok(docs) => {
            let show_lending = show_lending.clone();
            let filtered_docs = if *show_lending {
                docs.iter().filter(|item| item.is_lending).collect::<Vec<&Item>>()
            } else {
                docs.iter().collect::<Vec<&Item>>()
            };
            let button_text = if *show_lending { "全て表示" } else { "貸出中のみ" };
            let table_rows = filtered_docs.iter().map(|item| {
                let date = Local.timestamp_opt(
                    item.registered_date.seconds as i64,
                    item.registered_date.nanoseconds as u32)
                    .unwrap().to_string();
                let (date, _) = date.split_at(19);
                let lending_state = if item.is_lending {
                    html!{
                        <Link<Route> classes="hover:underline" to={Route::ProductDetail {id: item.lending_log_id.clone()}}>{"貸出中"}</Link<Route>>
                    }
                } else {
                    html! { <>{ "-" }</> }
                };
                html! {
                    <tr>
                        <td>{ &item.item_name }</td>
                        <td>{ &item.category }</td>
                        <td>{ date }</td>
                        <td class="text-center">{ lending_state }</td>
                        <td>{ &item.model_number }</td>
                        <td>{ &item.maker }</td>
                        <td>{ &item.supplier }</td>
                        <td><Link<Route> classes="hover:underline" to={Route::EditItem {id: item.id.clone()}}>{ "Edit" }</Link<Route>></td>
                    </tr>
                }
            });
            
            html! {
                <div class="flex flex-col gap-6">
                    <h1 class="text-2xl">{ "Product List" }</h1>
                    <button
                        class="w-1/3 rounded-md bg-action hover:bg-action-hover font-bold py-4 px-8"
                        onclick={Callback::from(move |_| show_lending.set(!*show_lending))}
                    >
                        { button_text }
                    </button>
                    <div class="overflow-x-scroll">
                        <table cellpadding="10" class="table-fixed text-left divide-y divide-word whitespace-nowrap mb-4">
                            <thead>
                                <tr>
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
                    </div>
                </div>
            }
        }
    }
}