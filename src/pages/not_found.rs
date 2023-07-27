use yew::prelude::*;

#[function_component(App)]
pub fn not_found() -> Html {
    html! {
        <img src="/images/BusErrorPicture.png" />
    }
}