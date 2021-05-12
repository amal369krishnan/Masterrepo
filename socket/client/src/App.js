import "./App.css";
import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
const socket = socketIOClient("http://localhost:4002/");
function App() {
	const [loggedIn, setlogged] = useState(false);
	const [state, setState] = useState({ name: "", room: "" });
	const [message, setMessage] = useState("");
	const [chat, setChat] = useState([]);
	const [broadcast, setBroadCast] = useState({});

	useEffect(() => {
		socket.on("message", ({ name, message }) => {
			setChat([...chat, { name, message }]);
		});
		socket.on("type", (data) => {
			setBroadCast(data);
		});
	});

	const enterRoom = (e) => {
		//e.preventDefault();
		setlogged(true);
		socket.emit("join", { room: state.room });
	};

	const displayMessage = (e) => {
		e.preventDefault();
		socket.emit("sendMessage", {
			name: state.name,
			message: message,
			room: state.room,
		});
		e.target.reset();
	};

	const chatRender = chat.map((v, k) => {
		return (
			<ul>
				<li key={k}>
					{v.name} : {v.message}
				</li>
			</ul>
		);
	});

	return (
		<div className="App">
			{loggedIn === false ? (
				<header className="App-header">
					<form onSubmit={enterRoom}>
						<div>
							<input
								type="text"
								placeholder="Name"
								onChange={(e) => {
									state.name = e.target.value;
								}}
								required
							/>
							<input
								type="text"
								placeholder="Room"
								onChange={(e) => {
									state.room = e.target.value;
								}}
								required
							/>
						</div>
						<button type="submit">Enter Chat</button>
					</form>
				</header>
			) : (
				<form onSubmit={displayMessage} className="chatContainer">
					<div className="messages">
						{chatRender}
						{broadcast.typing !== undefined && broadcast.typing !== "" ? (
							<span>
								{broadcast.name} {broadcast.typing}
							</span>
						) : (
							<span></span>
						)}
					</div>
					<div className="messageInputs">
						<input
							id="messageInput"
							type="text"
							placeholder="Message"
							onChange={(e) => {
								setMessage(e.target.value);
								socket.emit("typing", {
									name: state.name,
									typing: "typing...",
								});
								broadcast.typing = "";
							}}
							required
						/>
						<button type="submit" onClick="">
							send
						</button>
					</div>
				</form>
			)}
		</div>
	);
}

export default App;
