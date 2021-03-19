import React, { Component } from 'react';

export default class ViewPage extends Component{
    constructor(props){
        super(props);
        var data =  localStorage.getItem("items");
       
        
        this.state = {
            items:JSON.parse(data)
        };
    }

    render(){
        console.log(this.props);
        return (<div>
            <h1>View Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Hobbies</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {
                    (this.props.match.params.id == index)?
                (this.state.items.map((item,index) =>(
                            <tr>
                                <td key={index}>{item.fname}</td>
                                <td key={index}>{item.lname}</td>
                                <td key={index}>{item.age}</td>
                                <td key={index}>{item.hobby}</td>
                                <td key={index}>{item.email}</td>
                            </tr>
                            
                ))):(<tr></tr>)
            }
                </tbody>
            </table>
            </div>
            );}
}

