import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>My Home</div>
    <Link to="/products">Go to Products</Link>
    </>
  )
}

export default Home