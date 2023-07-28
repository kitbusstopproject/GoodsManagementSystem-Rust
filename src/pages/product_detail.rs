// Yewとmaterial_yewのプリリュード（事前に必要なモジュール）をインポート
use yew::prelude::*;
use chrono::{Local, TimeZone};


// firestore_hooksからデータのフェッチに関連するフックをインポート
use firestore_hooks::{use_document, NotFetched};
// modelモジュールから構造体をインポート
use model::LendingLog;

// ProductDetailProps構造体の定義
#[derive(Clone, Properties, PartialEq)]
pub struct ProductDetailProps {
    pub id: String,
}

// product_detail関数コンポーネントの定義
#[function_component(App)]
pub fn product_detail(props: &ProductDetailProps) -> Html {

    // Firestoreから個々のアイテムの情報を取得するためのフックを使用
    let lending_logs_data = use_document::<LendingLog>(
        &"".to_string(),
        &props.id
    );

    log::info!("props.id: {:?}", props.id);
    log::info!("lending_logs_data: {:?}", lending_logs_data);

    // 非同期処理で発生したエラーをハンドリングし、取得したデータをstateに代入
    let state = (|| Ok(lending_logs_data?))();


    // stateをマッチングして適切な要素を表示
    match state {
        // データがまだ取得中の場合
        Err(NotFetched::Loading) => {
            return html! { <div>{ "Loading..." }</div> }
        }
        // データの取得がエラーになった場合
        Err(NotFetched::Error) => {
            return html! { <div>{ "エラーが発生しました" }</div> }
        }
        // データの取得が成功した場合
        Ok(lending_logs_data) => {

            let date = Local.timestamp_opt(
                lending_logs_data.lending_date.seconds as i64,
                lending_logs_data.lending_date.nanoseconds as u32)
                .unwrap().to_string();
            let (date, _) = date.split_at(19);
    
            html! {
                <div class="flex flex-col gap-6">
                    <h1 class="text-2xl font-bold">{ "貸出ログ" }</h1>
                    <table cellpadding="10" class="table text-left">
                        <tbody>
                            <tr>
                                <th>{ "コメント" }</th>
                                <td>{ &lending_logs_data.comments }</td>
                            </tr>
                            <tr>
                                <th>{ "氏名" }</th>
                                <td>{ &lending_logs_data.name }</td>
                            </tr>
                            <tr>
                                <th>{ "貸出日" }</th>
                                <td>{ date }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        }
    }
}