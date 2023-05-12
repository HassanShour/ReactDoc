import React from 'react'
import { useAuthentication } from '../Components/Authentication'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Modal from '../Components/Portal';
const Profile = () => {
    const auth = useAuthentication();
    const navigate = useNavigate();
const handleLogout = () => {
    auth.logout();
    navigate("/");
}

  return (
    <div>
        <h1>
            Welcome {auth.user}
        </h1>
        <Button variant="contained" type='button' onClick={handleLogout}>Logout</Button>
        <Modal/>
    </div>
  )
}

export default Profile