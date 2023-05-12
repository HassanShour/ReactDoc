import React from 'react'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Products = () => {
  return (
    <div>
      <ErrorBoundary>
        <Product product={"Passion"}/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Product product={"Apples"}/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Product product={"Mango"}/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Product product={"Strawberry"}/>
        </ErrorBoundary>
    </div>
  )
}

const Product = ({product}) => {
  if(product === "Apple"){
    throw new Error ("Boundary Error: Apple Found"); 
  }

  return (
    <div>{product}</div>
  )
};

export default Products;