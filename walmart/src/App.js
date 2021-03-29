import "./App.css";
import {
  BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Cart from './compound/Cart';
import data from './compound/data';
import {ProductList} from "./compound/Product";
import React,{useState} from "react";


function App(props) {
  let x = JSON.parse(localStorage.getItem("products"));
  
  let [count, setquantity] = useState(x!==null?x.length:0);
  var quantity=(e)=>{
    return e===1?setquantity(count=1):setquantity(count=e);
  }

  return (
  <Router>
    <div className="App">
     <nav>
       <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({count})</Link>
          </li>
        </ul>
      </nav>

      <Switch>
          <Route path="/cart">
            <Cart product={ProductList} data={data} count={count} quantity={quantity}/>
          </Route> 

          <Route path="/products">
            <ProductList data={data} quantity={quantity}/>
          </Route>

          <Route render={() => <h4>404: page not found</h4>}></Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
