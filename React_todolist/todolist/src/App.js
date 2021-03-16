import './App.css';

function fullName(user){
  /*.log(props.state.items);*/
  if(user){
    return user.fname +' '+user.lname;
  }
  else{
    return "Stranger";
  }
}

function App() {
const user = {
   fname : "Jone",
   lname : "Perez"
};

  return (
    <div className="App">
     <h1>Hello {fullName(user)},</h1>
    </div>
  );
}

export default App;
