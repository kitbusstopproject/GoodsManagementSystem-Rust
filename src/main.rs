use yew_router::prelude::*;
use yew::prelude::*;

mod pages;
mod layout;
use layout::Layout;
use crate::pages::{ProductDetail, ProductList, EditItem};


#[derive(Debug, Clone, PartialEq, Routable)]
// NOTE: github pagesではルートパスにプロジェクト名が付与されるので、ルートパスを変更している
pub enum Route {
    #[at("/GoodsManagementSystem-Rust/")] // <- this is the default route
    ProductList,
    #[at("/GoodsManagementSystem-Rust/product/:id")]
    ProductDetail{ id: String },
    #[at("/GoodsManagementSystem-Rust/edit/:id")]
    EditItem{ id: String },
}

fn switch(route: Route) -> Html {
    match route {
        Route::ProductList => html! { <ProductList /> },
        Route::ProductDetail { id } => html! {<ProductDetail id={id} />},
        Route::EditItem { id } => html! {<EditItem id={id} />},
    }
}

#[function_component(Main)]
pub fn app() -> Html {
    html! {
        <BrowserRouter>
            <Layout>
                <Switch<Route> render={switch} /> // <- must be child of <BrowserRouter>
            </Layout>
        </BrowserRouter>
    }
}

fn main() {
    wasm_logger::init(wasm_logger::Config::default());
    yew::Renderer::<Main>::new().render();
}
