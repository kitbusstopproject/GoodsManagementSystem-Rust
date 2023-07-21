use yew_router::prelude::*;
use yew::prelude::*;

mod product_list;
mod product_detail;

#[derive(Debug, Clone, Copy, PartialEq, Routable)]
enum Route {
    #[at("/")]
    ProductList,
    #[at("/product/:id")]
    ProductDetail{ id: u32 },

}

fn switch(route: Route) -> Html {
    match route {
        Route::ProductList => html! { <product_list::App /> },
        Route::ProductDetail { id } => html! {<product_detail::App id={id} />},
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