import React from 'react'
import './Home4.css'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import Home5 from '../Home5/Home5';
function Home4() {
  return (
    <div className='home4'>
        <div className='big-border'>
          <h2 className='gps'>2000+ GPS Install</h2>
          <div className='img-logo'></div>
          <h2 className='gps2'>Track Your Shipment with GPS tracking service</h2>


          
        </div>
        <div className='info'>
            <h1>Information at your fingertips !</h1>
            <p>Liveasy provide all the details such as end to end visibility of   your load, history from a particular date aloow you to play previous trip notify abiut polis station and patrol pump ahead which lead to smooth operations of transport </p>
          </div>
         
         <div className='cheader'>
          <ul className='llogos'>
          <SwapHorizIcon/> 
            <li>Liveasy</li>
          </ul>
          <div className='cheader2'>
          <ul className='llogos2'>
          
            <li>Rajesh Pal</li>
            <li className='line'></li>
            <li>Sign-out</li>
          </ul>
          </div>
         </div>
         <Home5/>
    </div>
  )
}

export default Home4
