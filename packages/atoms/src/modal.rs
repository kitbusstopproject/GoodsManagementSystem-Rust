use yew::{function_component, html, Html, Children, Properties};



#[derive(Properties, PartialEq)]
pub struct ModalProps {
  pub id: String,
  pub tabindex: i32,
  pub hidden: bool,
  pub children: Children
}


#[function_component(Modal)]
pub fn modal(props: &ModalProps) -> Html {
  

  html! {
    <div 
      id={props.id.clone()} 
      tabindex={props.tabindex.clone().to_string()} 
      aria-hidden={props.hidden.clone().to_string()} 
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
      <div class="relative w-full max-w-2xl max-h-full">
        {props.children.clone()}
      </div>
    </div>
  }
}