import React from 'react'
import notFound from '../assets/images/404.png'
import { Link } from 'react-router-dom'

const NotFound = () => {

  const notFoundContainer = {
    height: '100vh', 
    textAlign: 'center' 
  }

  const colorButton = {
    backgroundColor: '#005461',
    color: 'white',
    padding: '7px 15px',
    textDecoration: 'none'
  }
    

  return (
    <>
    <div className="group d-flex flex-column justify-content-center align-items-center gap-5" style={notFoundContainer}>
      <h1 className='fw-bold'>PAGE NOT FOUND</h1>

      <img src={notFound} alt=""/>

      <Link to={'/'} style={colorButton}>Go Back</Link>
    </div>
    </>
  )
}

export default NotFound