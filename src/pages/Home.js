import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/products')
  }


  return (
    <>
    <div>My Home</div>
    <p>
    <Link to="products">Go to Products</Link>
    </p>

    <p>
      <button onClick={navigateHandler}>Navigate</button>
    </p>
    </>
  )
}

export default Home