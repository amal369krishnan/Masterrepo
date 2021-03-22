import React from 'react';

 let Cart = (props)=>{
    console.log("App ",props.product.items);
    let xget = JSON.parse(localStorage.getItem("products"));
        console.log(xget);
    return (<h1>Cart</h1>);
}

export default Cart;