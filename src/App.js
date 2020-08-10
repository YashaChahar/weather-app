import React from 'react';
import './App.css';
import {Navbar,Nav} from 'react-bootstrap';
import Weather from './Components/Weather';
import background from './background.png';

function App() {
  
  return (
    <div className="App"  >
      <div  style={{backgroundImage:`url(${background})`, backgroundSize: "cover",height:"800px"}}>
      <Navbar  expand="sm" className="mt-2 mb-2" style ={{border:"1px solid white"}}>
      <Navbar.Brand href="#home" style={{color:"white"}}>Logo</Navbar.Brand>
      <Nav>
      <Nav.Link href="#home"  style={{color:"white"}}>Home</Nav.Link>
      <Nav.Link  style={{color:"white"}}>About Us</Nav.Link>
      <Nav.Link   style={{color:"white"}}>Contact Us</Nav.Link>
      </Nav>
    </Navbar>
   
    <Weather className="mb-4" />
   

      </div>
    </div>
  );
}

export default App;
