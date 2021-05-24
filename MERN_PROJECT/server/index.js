const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const student = require("./routers/routers-1");
const socketio = require("socket.io");
const path = require("path");

app = express();
/*
 * npm install ejs
 * set views with path.join
 * set view engine with ejs extension
 * then render the ejs page
 */
app.set("views", path.join(__dirname, "/pages"));
app.set("view engine", "ejs");
/*
 *For css rendering in the ejs
 */
app.use(express.static(__dirname + "/pages"));

/*
 * limit --> used to limiting the size of json to 20mb
 * extended:false (by default, it is false) --> allow only string
 * extended:true --> allow all string and image format
 * urlencoded --> for url parsing
 */
app.use(express.json({ limit: "20mb", extended: true }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));
app.use(cors({ origin: "*" }));

/*Router set-up */
app.use("/student", student);
app.use("/", (request, response) => {
	response.render("index");
});

/*Server setups */
const port = process.env.PORT || 8080;
server = http.createServer(app);

/* Mongodb setups
 *  useNewUrlParser: true && useUnifiedTopology: true  --> used for eliminating the warning
 */
const url = "mongodb://127.0.0.1:27017/mern";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection
	.on("open", () => {
		console.log("Mongoose is connected");
	})
	.then(
		server.listen(port, () => {
			console.log(`Server running on the port : ${port}`);
		})
	)
	.catch((err) => {
		console.log(err);
	});

/*Socket Setup */
const io = socketio(server, { cors: { origin: "*" } });
io.on("connection", (socket) => {
	console.log(socket.id);
	socket.on("message", (data) => {
		socket.emit("trigger", data);
	});
});
