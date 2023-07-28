use yew::prelude::*;


#[derive(Clone, Properties, PartialEq)]
pub struct InputProps {
    pub id: String,
    pub label: String,
    pub placeholder: String,
    pub oninput: Callback<InputEvent>,
}

#[function_component(InputForm)]
pub fn input(props: &InputProps) -> Html {
    
    let oninput = {
        let oninput = props.oninput.clone();
        Callback::from(move |e: InputEvent| {
            oninput.emit(e);
        })
    };

    html! {
        <div class="mb-6">
            <label for={props.id.clone()} class="block text-md font-medium" >
                {&props.label}
                <br />
                <input
                    type="text"
                    id={props.id.clone()}
                    aria-label={props.label.clone()}
                    placeholder={props.placeholder.clone()}
                    value={props.placeholder.clone()}
                    {oninput}
                    class="p-2.5 text-black w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gra"
                />
            </label>
        </div>

    }
}