import { useState } from 'react'
import './App.css'
import SideBar from './SideBar'
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function App() {
  return (
    <div className="app">
     {/* <button className='dayNite'><i className='fa-solid fa-sun'></i></button>*/}
      <input type='checkbox' id='darkmode-toggle'></input>
      <label for="darkmode-toggle"></label>
      <div className="sidebar">
        <img src='/src/assets/sunset.jpg' alt='Example' width='200' height='60' className='sunset'/>
        <img src='/src/assets/7A6A1293.jpg' alt='ProfilePic' width='50' height='50' className='circleImg'/>
        <p className='name'>James (JB) Pryor</p>
        <p className='location'>San Diego</p>
        <ul>
          <li>Instagram <i className='fa-brands fa-instagram'></i></li>
          <li>LinkedIn <i className='fa-brands fa-linkedin'></i></li>
          <li>GitHub <i className='fa-brands fa-github'></i></li>
          <li>Email <i className='fa-solid fa-envelope'></i></li>
        </ul>
        <p className='name contact'><u>Resume</u></p>
      </div>

      <div className="main">
        <h1>Projects</h1>
        <div className='proj'>
          <h2>Mario Level Maker</h2>
          <p>This is a short description of my project. Basically talking about what it is what it does and what problem caused the creation of the program and how it solves that problem.</p>
          <p>Tools Used: Java, JavaFX, JGrasp, File reading/writing, Player physics, data querying/fetching</p>
          <a href='mario.html'>MarioMakerLevel GitHub Link</a>
        </div>
        <div className='proj'>
          <h2>Stock Tracker</h2>
          <p>This is a short description of my project. Basically talking about what it is what it does and what problem caused the creation of the program and how it solves that problem.</p>
          <p>Tools Used: Java, JavaFX, JGrasp, File reading/writing, Player physics, data querying/fetching</p>
          <a href='mario.html'>MarioMakerLevel GitHub Link</a>
        </div>
        <div className='proj'>
          <h2>Look Up!</h2>
          <p>This is a short description of my project. Basically talking about what it is what it does and what problem caused the creation of the program and how it solves that problem.</p>
          <p>Tools Used: Java, JavaFX, JGrasp, File reading/writing, Player physics, data querying/fetching</p>
          <a href='mario.html'>MarioMakerLevel GitHub Link</a>
        </div>
        <h1>About</h1>
        <p>
          21 year old software developer. Graduating with a bachelors of science in computer science: software engineering, i am passionate and enthusiastic to leave my mark on the technical world. 
          Worked with react to create websites, used figma to design webpages, use git for version control, vs code as primary ide, node.js and springboot, unity.
          Eager to dive into AI and machine learning, that is one of my highest items on my checklist, as well as developing/creating video games using unity or other game engines like unreal engine, using C# or C++, also fullstack engineering, creating the frontend and the backend to ship my own product. 
          That's why i got into compSci: to have the ability to create whatever I wanted. 
          Lot of us do not realize the powerful tool we have at our fingertips. Don't fear the man that wastes all his energy attacking you, fear the man that types a few lines on his computer attacking you.
        </p>
      </div>
    </div>
  );
}

