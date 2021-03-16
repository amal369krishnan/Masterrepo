import React, { Component } from "react";
import "./todolist.css";
class TodoItems extends Component {
  createTasks(item) {
    return <li onClick={() => this.popup(item.key)} 
              key={item.key}>{item.text}</li>
    
  }
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
    
  }

  delete(key) {
    this.props.delete(key);
  }

  onedit(key) {
    this.props.edit(key);
  }

  popup(key){
    var user_input = prompt("Edit(e) or Delete(d)");

    if(user_input ==="d" || user_input === "D"){
      this.delete(key);
    }

    else if(user_input ==="e" || user_input === "E"){
       this.onedit(key);
    }
    else{
      alert("Enter a valid input");
      this.popup(key);
    }

  }

  

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;