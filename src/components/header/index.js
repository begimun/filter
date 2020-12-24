import React from 'react';
import Items from './item.jsx';
import './style.scss';

// деструктуризация
const Header = ({items}) => {
// console.log(props)

    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        
                    </div>
                <div className="header__nav">
                       <Items items= {items}/>                      
                </div>
<div className="header__btn">Login</div>
                </div>
            </div>
        </header>
        
    )
}

export default Header;
