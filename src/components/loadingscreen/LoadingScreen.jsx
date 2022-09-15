import React from 'react'
import loading from '../../img/loading.gif'
import './loadingscreen.css'

const LoadingScreen = () => {
  return (
    <div className='loading-screen'>
        <img src={loading} alt="loading screen gif"/>
    </div>
  )
}

export default LoadingScreen