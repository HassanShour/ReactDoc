import React, { useEffect, useState } from "react";  
import "../index.css";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export function LoginForm (){

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  

useEffect(() =>{
console.log("Component did mount")
},[])

useEffect(() =>{
    if(email === '')
    return;
    console.log("Component email did update")
    },[email])

useEffect(() =>{
    if(password === '')
    return;
    console.log("Component password did update")
    },[password]) 

function handleEmail(e){
    setEmail(e.target.value);
}

function handlePassword(e){
    setPassword(e.target.value);
}



    return(
    <div className="States">
            <h3>UseState and UseEffect </h3>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}/>

 
   <div>
        <TextField
        value={email} onChange={handleEmail}    
          label="Email"
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="standard"
        />
       
        <FormControl    value={password}
          onChange={handlePassword} 
        sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
   
   <span> <hr/></span>

   
    </div>
  
    )
}


