import './App.css';
import io from 'socket.io-client'

// connect back end to front end
const socket = io.connect("http://localhost:3001");

function App() {
	return (
		<div className="App"></div>

	);
}

export default App;
