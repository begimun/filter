import React from 'react'

function Form() {
    const [element, setElement]= React.useState(["Атай"]);
    let munarbek;
    const ayday = (event) => 
    {
            munarbek= event.target.value;        
        };

    const atai= (event) =>{
        console.log(munarbek);
        event.preventDefault();
        setElement([...element,  munarbek]);

    return (
        <form>
            <input onChange={ayday} value={element } type="text" placeholder="пиши здесь что нибудь"/>
            <button onClick={atai}>Добавить новый элемент</button>
            <div>
                <ul>
                    {element.map((item)=>(
                    <li key={item}>{item}</li>
                    ))}
                    
                </ul>
            </div>

            
        </form>
    )
}
}

export default Form;
