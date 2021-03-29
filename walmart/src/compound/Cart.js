import React, {useEffect, useState} from 'react';
import './Cart.css';


const Cart = (props)=>{
   
    let x = JSON.parse(localStorage.getItem("products"));
    let y, amt = 0;
    let[items, setItems] = useState(JSON.parse(localStorage.getItem("products")));
    
    useEffect(() => {
        x!==null?props.quantity(x.length):props.quantity(0);
        document.title = "Cart ("+(props.count)+")";
        
    });

    /*------Incrementing item quantity---------
                    &&
    --------Decrementing item quantity-------*/
    let Qty_operation=(e,op)=>{
    
        let list1 = x.filter((ls)=>{
            return e.target.id ===ls.id;
        });
        if(op==="-"){
        if(list1[0].count>1){
            list1[0].count = list1[0].count-1;
        }}
        else{
            list1[0].count = list1[0].count+1;
        }

        for(var k=0; k<list1.length; k++){
            if(e.target.id === x[k].id){
                x[k] =list1[0];
            }
        }
        setItems(items = x);
        x = JSON.stringify(x);
        localStorage.setItem("products", x);
    }

    /*-----Remove Items----*/
    let Remove = (e)=>{

        let list = x.filter((ls)=>{
            return e.target.id !==ls.id;
        });
        setItems(items = list);
        localStorage.setItem("products",JSON.stringify(list));
    }
    console.log(items);
    if(x!==null){

        y = items.map((items,key)=>{
            /*------Amount Calculation------*/
            let prod_amt=0;
            prod_amt = parseInt(items.price);
            prod_amt *=items.count;
            amt +=prod_amt;
            /*-----------------------------*/
            return( 
                <table key={key} className="divide">
                    <tbody>
                    <tr>
                        <td className="item_text"><div className="item_Name"><b>{items.name}</b></div>
                        <img className="image" src={items.image} alt={items.name}></img>
                        </td>
                        <td className="item_text">₹{items.price}/Kg.
                            <button id={items.id} className="btns" onClick={(e)=>{Qty_operation(e,"-")}}>-</button>{items.count}
                            <button id={items.id} className="btns" onClick = {(e)=>{Qty_operation(e,"+")}}>+</button>
                        </td>
                        <td><button id={items.id} className="rmv_btn" onClick={(e)=>{Remove(e)}}>Remove</button></td>
                    </tr>
                    </tbody>
                </table>
               );});}

    return (
            <div>
                <h1>Cart</h1>

                <div className="container"> 
                    {y}
                </div>
                
                <div className="totallist">          
                    <aside>
                        <table>
                            <tbody className="total_amt">
                                <tr>
                                    <td>Total : <b>₹{amt}</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </aside>
                </div>
            </div>
        );
}

export default Cart;