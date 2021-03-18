import React, { Component } from "react"
import { Link } from "react-router-dom";
import "./Employee.css"
class Employee extends Component{

    constructor(props){
        var data =  localStorage.getItem("items");
       
        
        super(props);
        this.state = {
            items:JSON.parse(data)
        };
    }
    

    render(){
       
        return(<div>
            <h1>Employee Details</h1>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Operations</th>
                </tr>
                </thead>
                <tbody>
                
                {this.state.items.map((item,index) =>(
                            <tr>
                                <td key={index}>{item.fname + item.lname}</td>
                                <td key={index}><Link to={"/view/"+index}>View Details</Link></td>
                            </tr>
                            
                ))}
                </tbody>
            </table>
            </div>
        );
    
    }

}

export default Employee;