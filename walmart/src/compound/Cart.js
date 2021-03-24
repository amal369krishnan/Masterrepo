import React from 'react';
import './Cart.css';


  const Cart = (props)=>{
    const x = JSON.parse(localStorage.getItem("products"));
    let y, total;
    let amt = 0;
    
    let Add=(e)=>{
        let list = JSON.parse(localStorage.getItem("products"));
       
        let list1 = list.filter((ls)=>{
            return e.target.id ===ls.id;
        });
        list1[0].count = list1[0].count+1;
        
        for(var k=0; k<list1.length; k++){
            if(e.target.id === list[k].id){
                list[k] =list1[0];
            }
        }
        list = JSON.stringify(list);
        localStorage.setItem("products", list);
        window.location.reload();

    }

    let Remove=(e)=>{
        let list = JSON.parse(localStorage.getItem("products"));
       
        let list1 = list.filter((ls)=>{
            return e.target.id ===ls.id;
        });

        if(list1[0].count>1){
        list1[0].count = list1[0].count-1;
        }

        for(var k=0; k<list1.length; k++){
            if(e.target.id === list[k].id){
                list[k] =list1[0];
            }
        }

        list = JSON.stringify(list);
        localStorage.setItem("products", list);
        window.location.reload();

    }

   if(x!==null){
   for(let k=0; k<x.length; k++){
        let prod_amt=0;
        prod_amt = parseInt(x[k].price);
        prod_amt *=x[k].count;
        amt +=prod_amt;
    }
    
    total = (
    <aside className="totallist">
        <p>-----------------------------------</p>
        <div>Total : <b className="totalamt">₹{amt}</b></div>
    </aside>
    );}

    if(x!==null){
        y = x.map((items,key)=>{
        
            return( 
                <table key={key} className="divide">
                    <tbody>
                    <tr>
                        <td className="item_text"><div className="item_Name">{items.name}</div>
                        <img src={items.image} alt={items.name}></img>
                        </td>
                        <td className="item_text">₹{items.price}
                            <button id={items.id} className="btns" onClick = {(e)=>{Add(e)}}>+</button>{items.count}
                            <button id={items.id} className="btns" onClick={(e)=>{Remove(e)}}>-</button>
                        </td>
                    </tr></tbody>
                </table>
               );
    });}
    return (
            <div>
                <h1>Cart</h1>
                
                    {y}

                {total}
            </div>
        );
}

export default Cart;