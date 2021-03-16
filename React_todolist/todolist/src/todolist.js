import React, { Component } from "react";
import TodoItems from "./TodoItems";
 
class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
          };
          
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
         this.editItems = this.editItems.bind(this);
        
      }

      editItems(key){
        this.state.items.forEach((item)=>{
          if(item.key === key){
            document.getElementById('input').value = item.text;
            var user_input = prompt("Modify?",item.text);
            //var user_input = document.getElementById('input').value
            if(user_input){
              
              item.text = user_input;

            }
            else{
             
              this.editItems(key);
            }
          }
        });

        
      }

      deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       

        this.setState({
          items: filteredItems
        });
      }

      
      addItem(e) {
        
        if (this._inputElement.value !== "") {
          var newItem = {
            text: this._inputElement.value,
            key: Date.now()
          };
       
          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem) 
            };
          });
         
          this._inputElement.value = "";
        }
         
        console.log(this.state.items);
           
        e.preventDefault();
      }

      
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
        <form onSubmit={this.addItem}>
      
        <input ref={(a) => this._inputElement = a} placeholder="enter task" id="input">
            </input>
            <button id="sub_btn" type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} edit = {this.editItems}/>
      </div>
    );
  }
}
 
export default TodoList;