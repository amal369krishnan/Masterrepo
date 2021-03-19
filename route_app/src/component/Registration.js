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
        
        var newItems ={
            fname:this.state.value.fname,
            lname: this.state.value.lname,
            age: this.state.value.age,
            hobby: this.state.value.hobby,
            email: this.state.value.email,
            password: this.state.value.password
            
    
        };
        var data =  localStorage.getItem("items");
        data = JSON.parse(data);
        data.push(newItems);
           
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
                    <input type="text" placeholder="Age" id="age" required onChange={(e)=>this.changedata(e)}></input>
                </label>
        
                <label>
                    <input type="text" placeholder="Hobbies" id="hobby" required onChange={(e)=>this.changedata(e)}></input>
                </label>
            </div>

            <div className="input_text">
                <label>
                    <input type="email" placeholder="email" id="email" required onChange={(e)=>this.changedata(e)}></input>
                </label>

                <label>
                    <input type="password" placeholder="password" id="password" required onChange={(e)=>this.changedata(e)}></input>
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