import { useState } from 'react'
import './App.css'
import SideBar from './SideBar'

export default function App() {
  return (
    <div className="app">
      <button className='dayNite'></button>
      <div className="sidebar">
        <img src='/src/assets/sunset.jpg' alt='Example' width='200' height='60'/>
        <img src='/src/assets/7A6A1293.jpg' alt='ProfilePic' width='50' height='50' className='circleImg'/>
        <p className='name'>James (JB) Pryor</p>
        <p className='location'>San Diego</p>
        <p className='name contact'>Contact me</p>
      </div>

      <div className="main">
        <h1>Projects</h1>
        <p>
        </p>
      </div>
    </div>
  );
}

