import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthentication } from '../Components/Authentication'
import { Button } from '@mui/material';
function NavBar() {
  const auth = useAuthentication();
  return (
    <nav>
      <NavLink  to="/"><Button variant="contained">Home</Button></NavLink>
      <NavLink to="/store"><Button variant="contained">Store</Button></NavLink>
      <NavLink to="/contact"><Button variant="contained">Contact</Button></NavLink>
      <NavLink to="/products"><Button variant="contained">Products</Button></NavLink>
      <NavLink to="/users"><Button variant="contained">Users</Button></NavLink>
      <NavLink to="/profile"><Button variant="contained">Profile</Button></NavLink>
{!auth.user && (
      <NavLink to="/login"><Button variant="contained">Login</Button></NavLink>
)}
    </nav>
  )
}

export default NavBar