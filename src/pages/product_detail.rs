// Yewとmaterial_yewのプリリュード（事前に必要なモジュール）をインポート
use yew::prelude::*;
use material_yew::MatButton;

// firestore_hooksからデータのフェッチに関連するフックをインポート
use firestore_hooks::{use_document, use_collection, NotFetched};
// modelモジュールから構造体をインポート
use model::Item;
use model::LendingLog;

// ProductDetailProps構造体の定義。商品のIDを受け取るためのプロパティ
#[derive(Clone, Properties, PartialEq)]
pub struct ProductDetailProps {
    pub id: u32,
}

// product_detail関数コンポーネントの定義
#[function_component(App)]
pub fn product_detail(props: &ProductDetailProps) -> Html {

    // Firestoreから個々のアイテムの情報を取得するためのフックを使用
    let items_data = use_document::<Item>(
        &"".to_string(),
        "iY3FmgCEIAdEAzWPGSd6" // propsから受け取る値
    );


    //log::info!("items_col: {:?}", items_col);
    log::info!("items_data: {:?}", items_data);

    // 非同期処理で発生したエラーをハンドリングし、取得したデータをstateに代入
    let state = (|| Ok(items_data?))();


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
        Ok(items_data) => {
            html! {
                
                // HTMLを記述する
                <main>
                    // 見出しとして「Product Detail」と表示
                    <h1>{ "Product Detail" }</h1>
                    // propsで受け取った商品IDを表示
                    <h1>{ format!("Product ID: {:?}", props.id) }</h1>
                    <h1>{ &items_data.category }</h1>
                    <h1>{ &items_data.item_name }</h1>
                    <h1>{ &items_data.maker }</h1>
                    <h1>{ &items_data.model_number }</h1>
                    //<h1>{ date }</h1>
                    <h1>{ &items_data.supplier }</h1>
                    // マテリアルデザインのボタンを表示。ラベルに「Click me!」を指定し、アイコンに「code」を指定
                    <MatButton label="Click me!" icon={AttrValue::from("code")} />
                </main>
                
            }
        }
    }
}
