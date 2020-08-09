import React,{useState,useEffect} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import WDay from './WDay'
 const Weather = ({city,jsonResponse}) => {
      const [resultArray0,setResult0] = useState('');
      const [resultArray1,setResult1] = useState('');
      const [resultArray2,setResult2] = useState('');
      const [resultArray3,setResult3] = useState('');
      const [resultArray4,setResult4] = useState('');
    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Agra&appid=c1fdcf428e7b6c4d8313bc4e67b7e031`)
          .then(res => res.json())
          .then(
            (result) => {
              
              setResult0(result.list[0]);
              setResult1(result.list[1]);
              setResult2(result.list[2]);
              setResult3(result.list[3]);
              setResult4(result.list[4]);
            
            },
            (error) => {
              console.log(error);
            }
          )
      }, [])
    return(
<Container>
  <Row>
    <Col><WDay info ={resultArray0} city ={city} /></Col>
    <Col><WDay  info ={resultArray1} city ={city}/></Col>
    <Col><WDay info ={resultArray2} city ={city}/></Col>
    <Col><WDay info ={resultArray3} city ={city} /></Col>
    <Col><WDay info ={resultArray4} city ={city} /></Col>
  </Row>
</Container>
    )
}
export default Weather;