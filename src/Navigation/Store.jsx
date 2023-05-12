import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Modal from '../Components/Portal';
const Store = () => {
  const navigate = useNavigate();
  return (
   <>
    <Button variant="contained" onClick={()=>navigate("order-summary")}>Place Order</Button>
    <Modal/>
    </>
  );
};

export default Store