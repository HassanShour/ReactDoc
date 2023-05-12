import React from 'react'
import { Outlet, useSearchParams} from 'react-router-dom'
import Button from '@mui/material/Button';
import Modal from '../Components/Portal';
const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
        <h1>Ahmad</h1>
        <h1>Fadi</h1>
        <h1>Samir</h1>
        <Outlet/>

        <Button variant="contained" onClick={() => setSearchParams({filter: "active"})}>Active Users</Button>
        {" "}
        <Button variant="contained" onClick={() => setSearchParams({})}>Reset Filter</Button>
        {
          showActiveUsers ? (<h2>Showing active users</h2>) : (<h2>Showing all users</h2>)
        }
         <Modal/>
    </div>
    
  )
  
}

export default Users