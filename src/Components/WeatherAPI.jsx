import React, {useState} from "react";  
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function Weather(){

  const [cityValue, setCityValue] = useState("");

    return(
      
      <>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    />
      <hr/>
      <p>Please enter a city name to check the temp</p>

      <TextField label="City Name" color="primary" focused  value={cityValue}  onChange={(e) => setCityValue(e.target.value)}/> {" "}

      <Button variant="contained" className='city' type='button' onClick={()=>{WeatherB(cityValue)}}>Search</Button>
    </>
  )
}

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
}

async function WeatherB(cityValue) {

  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityValue}?unitGroup=metric&include=current&key=3YA9T85TQ6AXEEHEJ2Q7FGL44&contentType=json`, requestOptions);
  const data = await response.json()
  if(data){
    return(
    console.log(`The temperature in ${data.resolvedAddress} now is ${data.currentConditions.temp} Celsius`)
    )
    }}
