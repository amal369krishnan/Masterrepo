import './App.css';
import { useDispatch} from 'react-redux';
import { useEffect, useState } from 'react';
import Axios from 'axios';


const Todos = (props) => {
  const[items, setItems] = useState();
  const [trigger,setTrigger] = useState({});

  //const todos = useSelector(state=>state.todos);
  
  //Listing items using didMount/useEffect
  useEffect(()=>{
    Axios.get('http://localhost:3011/').then((res)=>{
      setItems(res.data);
      setTrigger(props.trigger);
      console.log("Useeffect",trigger)
    })
  });
  
  
  const dispatch = useDispatch();
  
  //For Deleting specific items
  const handleClick = (id) =>{
    Axios.post("http://localhost:3011/api/delete",{"id": id}).catch(
      (err)=>console.log(err));
  dispatch({
    type:'DELETE_TODO',
    payload: id,
  });
}

//Updation Function
const updation = (id)=>{
  const values = prompt("Type your change","eg. Bathing");
  
  Axios.post('http://localhost:3011/api/update',{values, id});
};

  //Front-end listing based on item present/not
  if(!items || !items.length){
    return <p>No TODOS</p>
  }
  return (<ul>
    {items.map((todo) =>{
      return <li><b onClick={()=>handleClick(todo.id)}>{todo.items}</b><button onClick={()=>updation(todo.id)}>Update</button></li>})}
  </ul>
  )
};

const TodoInput = (props) =>{
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  
  //For the insertion Process of items
  const handleClick = () => {
  dispatch({
    type:'ADD_TODO',
    payload: {
      label: newTodo,
      id:Math.ceil(Math.random()*100),
    }
  })
   const values = Axios.post("http://localhost:3011/api/insert",{"items": newTodo}).catch(
    (err)=>console.log(err));
    props.datas(values);
  }
  return (
    <div>
      <input value = {newTodo} onChange={(event)=>setNewTodo(event.target.value)} type="text"/>
      <button type="submit" onClick={handleClick}>ADD TODO</button>
    </div>
  )
};

function App() {
  const [promise,setPromise] = useState({});
  var datas=(e)=>{
    return setPromise(e);
  }
  
  return (
    
    <div className="App">
      <header className="App-header">
       <TodoInput datas = {datas}/>
       <Todos trigger={promise}/>
      </header>
    </div>

  );
}


export default App;
