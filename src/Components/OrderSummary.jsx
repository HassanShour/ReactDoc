import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

const OrderSummary = () => {
    const navigate = useNavigate();
  return (
    <>
    <div>Order Confirmed</div>
    <Button variant="contained" onClick={()=> navigate("/store")}>Back</Button>
    </>
  )
}

export default OrderSummary