const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const router = require("./controllers/routers");

const port = process.env.PORT || 4002;
const app = express();
app.use(router);
const server = http.createServer(app);
const io = socketio(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
	console.log(`Socket id : ${socket.id}`);

	socket.on("join", ({ room }) => {
		socket.join(room);
	});

	socket.on("leave", (room) => {
		socket.leave(room);
		console.log("client unsubcribed ", room);
	});

	socket.on("sendMessage", ({ name, message, room }) => {
		io.to(room).emit("message", { name, message });
	});

	function timeoutFunction() {
		socket.broadcast.emit("type", {});
	}
	socket.on("typing", async (typing) => {
		if (typing.typing) {
			typing.type = "is typing";
			socket.broadcast.emit("type", typing);
			await setTimeout(timeoutFunction, 2000);
		}
	});

	socket.on("disconnect", () => {
		console.log("client disconnected ", socket.id);
	});
});

server.listen(port, () => {
	console.log(`Running on the port : ${port}`);
});
