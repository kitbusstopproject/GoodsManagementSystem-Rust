use yew_router::prelude::*;
use yew::prelude::*;

mod pages;

use crate::pages::{ProductDetail, ProductList};


#[derive(Debug, Clone, PartialEq, Routable)]
enum Route {
    #[at("/")]
    ProductList,
    #[at("/product/:id")]
    ProductDetail{ id: String },
}

fn switch(route: Route) -> Html {
    match route {
        Route::ProductList => html! { <ProductList /> },
        Route::ProductDetail { id } => html! {<ProductDetail id={id} />},
    }
}

#[function_component(Main)]
pub fn app() -> Html {
    html! {
        <BrowserRouter>
            <Switch<Route> render={switch} /> // <- must be child of <BrowserRouter>
        </BrowserRouter>
    }
}

fn main() {
    wasm_logger::init(wasm_logger::Config::default());
    yew::Renderer::<Main>::new().render();
}
