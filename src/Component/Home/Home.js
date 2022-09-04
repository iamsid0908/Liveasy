import React from 'react'
import './Home.css'
import Home2 from '../Home2/Home2'
import Home3 from '../Home3/Home3'
import Home4 from '../Home4/Home4'
import Home6 from '../Home6/Home6'
import Footer from '../Footer/Footer'
function Home() {
  return (
    <>
    <div className='first-page'>
        <div className='header'>
            <ul className='logo'>
                <li>Liveasy</li>
            </ul>
            <ul className='nav'>
                <li>Home</li>
                <li>Blog</li>
                <li>Carrers</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='first-page-text'>
            <h1>
                India's Online Platform For Connecting
            </h1>
            <h1>Transporter & Shiping</h1>
            <div className='wrap1'>
            <h4>Get Shipper App</h4>
            <h4>Get Transporter App</h4>
            </div>
        </div>
    </div>
    
     <Home2/>
     <Home3/> 
     <Home4/>
     <Home6/>
     <Footer/>
     
    </>
     
  )
}

export default Home
