import React from "react";
import "./App.css";
import CreateStudent from "./components/CreateStudent/createStudent";
import ShowStudent from "./components/ShowStudent/showStudent";
import socketio from "socket.io-client";
const io = socketio("http://localhost:8080");
function App() {
	return (
		<div className="row">
			<div className="column">
				<CreateStudent io={io} />
			</div>
			<div className="column container">
				<ShowStudent io={io} />
			</div>
		</div>
	);
}

export default App;
