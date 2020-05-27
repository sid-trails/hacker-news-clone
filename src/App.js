import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<div tabIndex="0" className="App">
			<div className="container px-0 px-md-15">
				<Navbar bg="dark" variant="dark" className="py-0">
					<NavbarBrand className="py-0">Hacker News</NavbarBrand>
				</Navbar>
			</div>
		</div>
	);
}

export default App;
