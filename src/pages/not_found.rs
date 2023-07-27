use yew::prelude::*;

#[function_component(App)]
pub fn not_found() -> Html {
    html! {
        <img class="md:w-50 lg:w-65" src="/images/BusErrorPicture.png" />
    }
}