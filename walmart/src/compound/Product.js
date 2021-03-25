
import "./product.css";
import React from 'react';


var ProductList = (props) => { 
   
    const Add=(e)=>{
        let prod = JSON.parse(localStorage.getItem("products")) || [];
        let x = props.data.filter(item=>{
            return e.target.id === item.id;
        });
        
        x[0].count =1;
        if(prod!==[]){

        for(var k=0;k<prod.length;k++){
            if(prod[k].id === e.target.id){
               return prod;
            }
        }
    }
        prod.push(x[0])
        localStorage.setItem("products", JSON.stringify(prod));
        var p = JSON.parse(localStorage.getItem("products"))
        props.qty(p.length);
        console.log(prod);

    }

    const items = props.data!==undefined?(props.data.map((item, key)=>{
       
               return(<div className="row" key={key}>
                        <div className="column hover01">
                            <figure>
                                <a id="{item.id}" href="/cart" className="btn btn-primary">
                                    <img className="card-img-top" src={item.image} alt="card" title={item.name}></img>
                                    <h5 className="card-title">{item.name}</h5>
                                    <h6>₹{item.price}</h6>
                                </a>
                            </figure>
                            <button id={item.id} className="btn-primary" 
                            onClick={Add}>Add to cart</button>
                        </div>
                </div>);})):(<h1>404</h1>);

    return (
    <div className="border_div">  
        <h1 className="heading1">Select the products</h1>
            {items}
            </div>
        );
}
    
export {ProductList};
              