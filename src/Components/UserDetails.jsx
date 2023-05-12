import React from 'react'
import { useParams } from 'react-router-dom';

const UserDetails = () => {
const params = useParams();
const userId = params.userId;
  return (
    <div><h1>UserDetails about {userId}</h1></div>
  )
}

export default UserDetails