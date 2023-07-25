// Yewとmaterial_yewのプリリュード（事前に必要なモジュール）をインポート
use yew::prelude::*;
use material_yew::MatButton;

// ProductDetailProps構造体の定義。商品のIDを受け取るためのプロパティ
#[derive(Clone, Properties, PartialEq)]
pub struct ProductDetailProps {
    pub id: u32,
}

// product_detail関数コンポーネントの定義
#[function_component(App)]
pub fn product_detail(props: &ProductDetailProps) -> Html {
    html! {
        // HTMLを記述する
        <main>
            // 見出しとして「Product Detail」と表示
            <h1>{ "Product Detail" }</h1>
            // propsで受け取った商品IDを表示
            <h1>{ format!("Product ID: {:?}", props.id) }</h1>
            // マテリアルデザインのボタンを表示。ラベルに「Click me!」を指定し、アイコンに「code」を指定
            <MatButton label="Click me!" icon={AttrValue::from("code")} />
        </main>
    }
}
