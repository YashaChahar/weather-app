import React,{useState,useEffect} from 'react';
import {Container,Row,Col,InputGroup,FormControl,Button} from 'react-bootstrap';
import WDay from './WDay'
 const Weather = ({jsonResponse}) => {
      const [resultArray0,setResult0] = useState('');
      const [resultArray1,setResult1] = useState('');
      const [resultArray2,setResult2] = useState('');
      const [resultArray3,setResult3] = useState('');
      const [resultArray4,setResult4] = useState('');
      const [city,setCity] = useState('Bengaluru');
      const [change,setChange] = useState(false);
      const getWeather =(e) =>{
        var c = !change;
        setChange(c);
        console.log(change);
      }
    useEffect(() => {
          fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c1fdcf428e7b6c4d8313bc4e67b7e031`)
            .then(res => res.json())
            .then(
              (result) => {
                console.log(result);
                setResult0(result.list[0]);
                setResult1(result.list[9]);
                setResult2(result.list[17]);
                setResult3(result.list[25]);
                setResult4(result.list[33]);
                setCity(result.city.name);
            
            },
            (error) => {
              console.log(error);
            }
          )
      }, [change])
    return(
      <>
      
      <InputGroup className="mb-3 mt-2 "  >
      <FormControl
        placeholder="Search..." type="text" onChange={
          (e)=> { setCity(e.target.value) } } 
          
      />
      <Button onClick={getWeather}>Get Forecast</Button>
    </InputGroup>
 
<Container>
  <Row>
    <Col><WDay info ={resultArray0} city ={city} /></Col>
    <Col><WDay  info ={resultArray1} city ={city}/></Col>
    <Col><WDay info ={resultArray2} city ={city}/></Col>
    <Col><WDay info ={resultArray3} city ={city} /></Col>
    <Col><WDay info ={resultArray4} city ={city} /></Col>
  </Row>
</Container>
</>
    )
}
export default Weather;