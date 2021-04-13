import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Axios from 'axios';

const Todos = () => {
  const todos = useSelector(state=>state.todos);
  
  const dispatch = useDispatch();
  const handleClick = id =>dispatch({
    type:'DELETE_TODO',
    payload: id,
  });
  if(!todos || !todos.length){
    return <p>No TODOS</p>
  }
  
  return (<ul>
    {todos.map(todo => <li onClick={()=>handleClick(todo.id)}>{todo.label}</li>)}
  </ul>
  )
};

const TodoInput = () =>{
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();
  
  const handleClick = () => 
  dispatch({
    type:'ADD_TODO',
    payload: {
      label: newTodo,
      id:Math.ceil(Math.random()*100),
    }
  })
  
  Axios.post("http://localhost:3011/api/insert",{"items": newTodo}).then(
    ()=>{alert("Successfull insertion")}).catch(
      (err)=>console.log(err));
  return (
    <div>
      <input value = {newTodo} onChange={(event)=>setNewTodo(event.target.value)} type="text"/>
      <button type="submit" onClick={handleClick}>ADD TODO</button>
    </div>
  )
};

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
       
       <TodoInput />
       <Todos />
      </header>
    </div>

  );
}

export default App;
