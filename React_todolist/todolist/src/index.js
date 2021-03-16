import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";
import "./index.css";
import TodoList from "./todolist";
  
var destination = document.querySelector("#container");
  
ReactDOM.render(
    <div>
       <TodoList/>
       
    </div>,
    destination
);