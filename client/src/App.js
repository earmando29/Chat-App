import './App.css';
import io from 'socket.io-client'
import {useState} from 'react';
import Chat from './Chat.js';

// connect back end to front end
const socket = io.connect("http://localhost:3001");

function App() {
	const [username, setUsername] = useState("");
	const [room, setRoom] = useState("");

	const joinRoom = () => {
		// Admit event from socket.io
		if (username !== "" && room !== "") {
			socket.emit("join_room", room);
		}
	};

	return (
		<div className="App">
			<div  className="joinChatContainer">
				<h3>Join A Chat</h3>
				<input 
					type="text" 
					placeholder="Ben..." 
					onChange={(event) =>{
						setUsername(event.target.value);
					}}
				/>
				<input 
					type="text" 
					placeholder="Ben..." 
					onChange={(event) =>{
						setRoom(event.target.value);
					}}
				/>			
				<button onClick={joinRoom}>Join Room</button>
			</div>

				<Chat socket={socket} username={username} room={room}/>
		</div>
	);
}

export default App;
