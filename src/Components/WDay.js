import React,{useState,useEffect} from 'react';
import {Card} from 'react-bootstrap';
import image from './cloudy.png'


const WDay = ({info,city}) =>{
 
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
  setHumidity(info.main.humidity)
  setWindSpeed(info.wind.speed)
  if(info.weather[0])
  {
    setWeatherDescription(info.weather[0].description);
    
  }
  
  }




},[info,city]

)
return(
    <Card  style={{ width: '14rem', background:"grey" }}>
 
  <Card.Body>
    <Card.Title>{city}</Card.Title>
    <Card.Text>
     {date}
    </Card.Text>
    <Card.Img variant="top" src={image} />
    <Card.Text style={{fontSize:"50px"}}>
     {Math.floor(temp-273)+"ºC"}
     </Card.Text>
     
     <Card.Text style={{fontSize:"20px"}} >
     {"Humidity: "+humidity}<br/>
     {weatherDescription}
    </Card.Text>
  </Card.Body>
</Card>
)
}
export default WDay;