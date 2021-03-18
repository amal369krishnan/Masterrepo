import React, {Component} from 'react';
import './Register.css';
import {  withRouter } from 'react-router-dom'


class Register extends Component{ 
    
    arr = [];

   constructor(props) {
        super(props);
   
        this.state = {
            items : [],
            value:{}
        };

        this.addItems = this.addItems.bind(this);
    }
   
    
    addItems(e){
        
        let _fname = document.getElementById('fname');
        let _lname = document.getElementById('lname');
        let _age = document.getElementById('age');
        let _hobby = document.getElementById('hobby');
        let _email = document.getElementById('email');
        let _password = document.getElementById('password');
        
        var newItems ={
            fname:_fname.value,
            lname: _lname.value,
            age: _age.value,
            hobby: _hobby.value,
            email: _email.value,
            password: _password.value
            
    
        };
        var data =  localStorage.getItem("items");
        data = JSON.parse(data);
        data.push(newItems);
        
        this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItems) 
            };
          });
         
            _fname.value = "";
            _lname.value = "";
            _age.value = "";
            _email.value = "";
            _password.value = "";
            _hobby.value = "";
           
            localStorage.setItem('items',JSON.stringify(data));
    
        e.preventDefault();
          /*console.log(this.arr);*/
        this.props.history.push('/display')
        
     }

     changedata=async(e)=>{
         console.log("Change ",e.target.id);
        await this.setState({  
            value:{...this.state.value,[e.target.id]:e.target.value}
        })
        console.log(this.state);
     }
    render(){
        console.log(this.state.value);

        return(
            <form   action="/display" onSubmit={this.addItems}>
            <div className="form_h1">
            <h1>Form Registration</h1>
            </div>
            
            <div className="input_text">
                <label>
                    <input type="text" placeholder="First Name" id="fname" required onChange={(e)=>this.changedata(e)}></input>
                </label>

                <label>
                    <input type="text" placeholder="Last Name" id="lname" required onChange={(e)=>this.changedata(e)}></input>
                </label>
            </div>

            <div className="input_text">
                <label>
                    <input type="text" placeholder="Age" id="age" required></input>
                </label>
        
                <label>
                    <input type="text" placeholder="Hobbies" id="hobby" required></input>
                </label>
            </div>

            <div className="input_text">
                <label>
                    <input type="email" placeholder="email" id="email" required></input>
                </label>

                <label>
                    <input type="password" placeholder="password" id="password" required></input>
                </label>
            </div>

            <div className="input_text">
            <input type="submit" id="submit_btn" value="Submit"></input>
            <input type="reset" id="reset_btn" value="Reset"></input>
            </div>
        </form>
        
);
 }
}

 export default withRouter(Register);