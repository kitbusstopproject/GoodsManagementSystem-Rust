mod route;

use route::Main;

fn main() {
    wasm_logger::init(wasm_logger::Config::default());
    yew::Renderer::<Main>::new().render();
}
