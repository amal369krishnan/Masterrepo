import './App.css';
import io from 'socket.io-client';
import React,{useEffect,useState} from 'react';

function App() {
  var socket

  const [loggedIn, setlogged] = useState(false);
  const [room, setRoom] = useState('');
  const [user, setUser] = useState('');

  //After loggedin 
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  useEffect(()=>{
    
    socket = io("localhost:4002/");})
  

  
  useEffect(()=>{
    console.log("useeffect", messageList);
    
    socket.on("recieve_msg",(msg)=>{
      setMessageList([...messageList,msg]);
      
    })
  });

  const connectToRoom = ()=>{
    setlogged(true);
    socket.emit('join_room',room);
  }

  const sendMessage = ()=>{
    let messageContent = {
      room:room,
      content:{
      author:user,
      message:message}
    }

    socket.emit("send_message",messageContent);
    console.log(messageList);
    setMessageList([...messageList,messageContent.content]);
    console.log("2"+messageList);
    setMessage("");
    
  }

  return (
    <div className="App">
       {loggedIn ===false?(
      <header className="App-header">
       
        <div>
          <div>
       <input type="text" placeholder="Name" onChange={(e)=>{setUser(e.target.value)}}/>
       <input type="text" placeholder="Room" onChange={(e)=>{setRoom(e.target.value)}}/>
       </div>
       <button onClick={connectToRoom}>Enter Chat</button>
       </div></header>):
       (<div className="chatContainer">
        <div className="messages">{
          messageList.map((val, key)=>{
            
            return (
            <ul>
              <li key={key}>{val.author}{val.message}</li>
            </ul>);
           })}
        </div>

           <div className="messageInputs">
           <input type="text" placeholder="Message" onChange = {(e)=>{setMessage(e.target.value)}}/>
           <button onClick={sendMessage}>send</button>
           </div>
           
         </div>

       )}
      
    </div>
  );
}

export default App;
