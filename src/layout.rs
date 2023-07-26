use yew::{function_component, hook, html, Html, Children, Properties};


#[derive(Properties, PartialEq)]
pub struct ChildrenOnlyProps {
    pub children: Children,
}

#[hook]
pub fn use_stored_input(key: &str) -> (Option<String>,yew::Callback<String>){
    let get_local_storage = || {
        let window = web_sys::window()?;
        window.local_storage().ok()?
    };
    let input_state = yew::use_state(|| {
        let local_storage = get_local_storage()?;
        local_storage.get_item(key).ok()?
    });
    let key = key.to_owned();
    yew::use_effect_with_deps(move |state| {
        if let Some(state) = &**state {
            let local_storage = get_local_storage().unwrap();
            local_storage.set_item(key.as_str(),&state).unwrap();
        }
        || {}
    }, input_state.clone());
    let state = &*input_state;
    (state.clone(),yew::Callback::from (move |input| {
        input_state.set(Some(input));
    }))
}

#[function_component(Layout)]
pub fn layout(props: &ChildrenOnlyProps) -> Html {
    let (theme,set_theme) = use_stored_input("theme");
    let dark_mode = theme == Some("dark".to_owned());
    html! {
        <div class="transition-color bg-screen min-h-screen h-max text-word"  data-theme={if dark_mode {"dark"} else { "light"}}>
            <header class="flex items-center w-full border-gray-400 border-solid border-b px-4 py-3">
                <a class="hover:underline text-xl" href="/">{"物品管理しちゃおっかなー"}</a>
                <button class="ml-auto text-3xl" onclick={set_theme.reform(move |_| if dark_mode { "light".into() } else { "dark".into() })}>
                    {if dark_mode {"🌞"} else {"🌚"}}
                </button>
            </header>
            <main class="pl-8 py-10">
                { props.children.clone() }
            </main>
        </div>
    }
}