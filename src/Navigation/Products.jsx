import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Modal from '../Components/Portal'
const Products = () => {
  return (
    <>
    <input type='text' placeholder='search products..'/>
    <nav>
        <Link to={"/products/featured"}>Featured</Link>
        <Link to={"/products/new"}>New</Link>
    </nav>
    <Outlet/>
    <Modal/>
    </>
  )
}

export default Products

