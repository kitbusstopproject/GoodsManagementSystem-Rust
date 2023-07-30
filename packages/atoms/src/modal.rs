use yew::prelude::*;


#[derive(Properties, PartialEq)]
pub struct ModalProps {
  pub id: String,
  pub show: bool,
  pub onopen: Callback<MouseEvent>,
  pub onclose: Callback<MouseEvent>,
  pub children: Children
}

#[function_component(Modal)]
pub fn modal(props: &ModalProps) -> Html {
  let modal_ref = use_node_ref();
  // let modal = modal_ref.cast::<web_sys::HtmlDialogElement>().unwrap();
  // let onclose = props.onclose.clone();
  // let onopen = {
  //   let modal = modal.clone();
  //   let onopen = props.onopen.clone();
  //   Callback::from(move |e: web_sys::MouseEvent| {
  //     log::info!("open");
  //     modal.show();
  //     onopen.emit(e);
  //   })
  // };
  // {
  //   let modal_ref = modal_ref.clone();
  //   let onclose = onclose.clone();
  //   let onopen = onopen.clone();
  //   use_effect_with_deps(
  //     move |modal_ref| {
  //       let modal = modal_ref.cast::<web_sys::HtmlDialogElement>().unwrap();
  //       let onclose = {
  //         let modal = modal.clone();
  //         let onclose = onclose.clone();
  //         Callback::from(move |e: web_sys::MouseEvent| {
  //           modal.close();
  //           onclose.emit(e);
  //         })
  //       };

  //       let onopen = {
  //         let modal = modal.clone();
  //         let onopen = onopen.clone();
  //         Callback::from(move |e: web_sys::MouseEvent| {
  //           log::info!("open");
  //           modal.show();
  //           onopen.emit(e);
  //         })
  //       };
  //     },
  //     modal_ref
  //   );
  // };

  html! {
    <div 
      ref={modal_ref}
      role="dialog"
      class="fixed bg-gray-400 opacity-30 top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
      <div class="relative w-full max-w-2xl max-h-full">
        {props.children.clone()}
      </div>
    </div>
  }
}