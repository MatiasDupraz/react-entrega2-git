import React from 'react';
import emptyCart from './assets/img/cart3.svg';
const Cart = (svg) => {
    return (
        <img src={svg.img} alt="cart" className='w-7 h-7'/>
    )
}
let cantProductos = 0;
const cartWidget = () => {
    return (
        <div className='flex'>
            <Cart img={emptyCart}/>
            <p className='text-2xl text-gray-50'>{cantProductos}</p>
        </div>
    )
}
export default cartWidget;