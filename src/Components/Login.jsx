import React, { useState } from 'react'
import { useAuthentication } from './Authentication';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Modal from './Portal';

const Login = () => {
    const [user, setUser] = useState("");
    const auth = useAuthentication();
    const navigate = useNavigate();

    const handleLogin = () => {
    auth.login(user);
    navigate("/profile", {replace: true})
    }

  return (
    <div>
        <label>UserName: 
            <input type='text' name='username' placeholder='Username' onChange={(e) => setUser(e.target.value)}/>
        </label>
        <Button variant="contained" type='button' onClick={handleLogin}>Login</Button>
        <Modal/>
    </div>
  )
}

export default Login