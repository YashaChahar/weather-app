import React,{useState,useEffect} from 'react';
import {Card,Button} from 'react-bootstrap';
const WDay = ({info,city}) =>{
  console.log("here",info)
const [date,setDate] = useState('');

const [temp,setTemp] = useState('');
const [humidity,setHumidity] =useState('');
const [windSpeed,setWindSpeed] = useState('');
const [weatherDescription,setWeatherDescription] = useState('');
useEffect(()=>{
  if(info)
  {
  setDate(info.dt_txt)
  setTemp(info.main.temp)
 
  var a = info.main;
  var b = info.wind;
  var c = info.weather;
  }
 
console.log(a)
console.log(b)
console.log(c)
console.log(city)


},[info]

)
return(
    <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{city}</Card.Title>
    <Card.Text>
     {date}
    </Card.Text>
    <Button variant="primary">Gore somewhe</Button>
  </Card.Body>
</Card>
)
}
export default WDay;