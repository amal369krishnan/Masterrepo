
import "./product.css";
/*import img0 from './images/tomato.jpg';
import img1 from './images/Broccoli.jpg';
import img2 from './images/Carrot-Orange_grande.jpg';
import img3 from './images/capsicum-green.jpg';
import img4 from './images/Raddish.jpg';
import img5 from './images/Red-Radish-1.jpg';
import img6 from './images/Cauliflower.jpg';
import img7 from './images/cabbage.jpg';
import img8 from './images/brinjal.jpg';*/




var ProductList = (props) => {
    
    const Add=(e)=>{
        let prod = JSON.parse(localStorage.getItem("products")) || [];
        let x = props.data.filter(item=>{
            return e.target.id === item.id;
        });
        console.log(prod);

        // if(prod!==null){
            prod.push(x[0]);
        // }
        // else{
        //     prod = [x[0]]
        // }
        console.log(prod);
        localStorage.setItem("products", JSON.stringify(prod));
            console.log(x);
      
    }

    const items = props.data!==undefined?(props.data.map((item, key)=>{
        console.log(item);
       
               return(<div className="row" key={key}>
                        <div className="column hover01">
                            <figure>
                                <a id="{item.id}" href="/cart" className="btn btn-primary">
                                    <img className="card-img-top" src={item.image} alt="card" title={item.name}></img>
                                    <h5 className="card-title">{item.name}</h5>
                                    <h6>{item.price}</h6>
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
                /* <div className="column hover01">
                    <figure>
                    <a id="tomato" href="/cart" className="btn btn-primary">
                        <img className="card-img-top" src={img1} alt="card" title="Tomato"></img>
                        <h5 className="card-title"></h5>
                        </a>
                        </figure>
                        <button id="tomato" onClick={(e)=>CartItem(itemId = e.target.id)}>Add to cart</button>
                </div>

                <div className="column hover01">
                <figure>
                <a  href="/" className="btn btn-primary">
                    <img className="card-img-top" src={img2} alt="" title="Bruccoli"></img>
                        <h5 className="card-title">Bruccoli</h5> 
                </a>
                </figure> 
                <button id="bruccoli" onClick={(e)=>CartItem(itemId = e.target.id)}>Add to cart</button>
                </div>

                <div className="column hover01">
                <figure>
                    <a href="/" className="btn btn-primary">
                    <img className="card-img-top" src={img3} alt="card"></img>
                        <h5 className="card-title">Carrot</h5>
                    </a>
                    </figure>

                    <button id="carrot" onClick={(e)=>CartItem(itemId = e.target.id)}>Add to cart</button>
                    </div> 
                </div>

        <div className="row">
        <div className="column hover01">
        <figure>
            <a href="/" className="btn btn-primary">
                <img className="card-img-top" src={img4} alt="card"></img>
                        <h5 className="card-title">Capsicum</h5> 
                    </a>
                    </figure>
                    <button id="capsicum" onClick={(e)=>CartItem(itemId = e.target.id)}>Add to cart</button>
                </div>

                <div className="column hover01">
                <figure>
                <a href="/" className="btn btn-primary">
                    <img className="card-img-top" src={img5} alt="card"></img>
                        <h5 className="card-title">White-Raddish</h5>  
                    </a>
                    </figure>
                    <button id="white_raddish" onClick={(e)=>CartItem(itemId = e.target.id)}>Add to cart</button>
                </div>

                <div className="column hover01">
                <figure> 
                <a href="/" className="btn btn-primary">
                    <img className="card-img-top" src={img6} alt="card"></img>
                        <h5 className="card-title">Red-Raddish</h5>
                    </a>
                    </figure>
                    <button id="red_raddish" onClick={(e)=>CartItem(itemId = e.target.id)}>Add to cart</button>
                </div>
            </div>

            <div className="row">
        <div className="column hover01">
        <figure>
        <a href="/" className="btn btn-primary">
            <img className="card-img-top" src={img7} alt="card"></img>

                        <h5 className="card-title">Cabbage</h5>
                        
                </a></figure>
                <button id="cabbage" onClick={(e)=>CartItem(itemId = e.target.id)}>Add to cart</button>
                </div>

                <div className="column hover01">
                <figure>
                <a href="/" className="btn btn-primary">
                    <img className="card-img-top" src={img8} alt="card"></img>
                    
                        <h5 className="card-title">Cauliflower</h5>
                       
                    </a></figure>
                    <button id="cauliflower" onClick={(e)=>CartItem(itemId = e.target.id)}>Add to cart</button>
                </div>

                <div className="column hover01">
                <figure>
                <a href="/" className="btn btn-primary">
                    <img className="card-img-top" src={img9} alt="card"></img>
                   
                        <h5 className="card-title">Brinjal</h5>
                  
                    </a>
                    </figure>
                    <button id="brinjal" onClick={(e)=>CartItem(itemId = e.target.id)}>Add to cart</button>
                </div>
            </div>*/

