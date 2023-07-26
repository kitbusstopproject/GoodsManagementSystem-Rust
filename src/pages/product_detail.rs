// Yewとmaterial_yewのプリリュード（事前に必要なモジュール）をインポート
use yew::prelude::*;
use material_yew::MatButton;
use chrono::{Local, DateTime, TimeZone};


// firestore_hooksからデータのフェッチに関連するフックをインポート
use firestore_hooks::{use_document, use_collection, NotFetched};
// modelモジュールから構造体をインポート
use model::Item;
use model::LendingLog;

// ProductDetailProps構造体の定義。商品のIDを受け取るためのプロパティ
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
        "fOkaAj2YQ9mr8d2rvmHu" // propsから受け取る値
    );

    //log::info!("items_col: {:?}", items_col);
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

            html! {
                
                // HTMLを記述する
                <main>
                    // 見出しとして「Product Detail」と表示
                    <h1>{ "Product Detail" }</h1>
                    
                    // itemsコレクションから取得した値
                    <h1>{ &lending_logs_data.comments }</h1>
                    <h1>{ date }</h1>
                    <h1>{ &lending_logs_data.name }</h1>
                    
                    // マテリアルデザインのボタンを表示。ラベルに「Click me!」を指定し、アイコンに「code」を指定
                    <MatButton label="Click me!" icon={AttrValue::from("code")} />
                </main>
                
            }
        }
    }
}