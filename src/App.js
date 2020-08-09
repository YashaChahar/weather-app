import React, {useState} from 'react';
import './App.css';
import {Navbar,Nav,InputGroup,FormControl,Button} from 'react-bootstrap';
import Weather from './Components/Weather';

function App() {
   const [city,setCity] = useState('');
   const [jsonResponse, setjsonResponse] = useState('');
  const getWeather = async() =>{
     const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c1fdcf428e7b6c4d8313bc4e67b7e031`)
     const response = await api_call.json();
     console.log( "Hii here" +response);
     setjsonResponse(response);
     console.log(jsonResponse);
   }
  return (
    <div className="App">
      <div className ="container" style={{height:"500px" ,width:"850px", border:"1px solid black",textAlign:"center"}} >
      <Navbar  expand="sm" className="mt-2" style ={{border:"1px solid black"}}>
      <Navbar.Brand href="#home">Logo</Navbar.Brand>
      <Nav style={{TextAlign:"left"}}>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link>About Us</Nav.Link>
      <Nav.Link >Contact Us</Nav.Link>
      </Nav>
    </Navbar>
    <InputGroup className="mb-3 mt-2" >
    <FormControl
      placeholder="Search" type="text" onChange={
        (e)=> { setCity(e.target.value) }
       }  
    />
    <Button onClick={getWeather}>Get Forecast</Button>
  </InputGroup>
   
    <Weather city ={city} response ={jsonResponse}/>

      </div>
    </div>
  );
}

export default App;
