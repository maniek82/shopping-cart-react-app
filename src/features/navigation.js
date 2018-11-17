import React from 'react';
import {NavLink} from 'react-router-dom';

const cartCount = (items) => {
    return items.reduce((acc,item)=> {
        return acc + item.quantity
    },0)
}
const Navigation = (props) => {
    return (
        <nav>
            <ul className="top-menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/cart"> Cart ({cartCount(props.cart)}) </NavLink></li>
                <li><NavLink to="/checkout">Checkout</NavLink></li>
            </ul>
         </nav>
    );
};

export default Navigation;