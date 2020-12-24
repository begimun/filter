import React from 'react'

function Items({items}) {
    
    return(
        <nav>
            <ul>

            {items.map((item) => (
            <li key={item}>
                <a href="">{item}</a></li>
            ))}
            
            </ul>
        </nav>


    
    )

}

export default Items;   
