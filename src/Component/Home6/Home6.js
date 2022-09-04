import React from 'react'
import './Home6.css'
import StarIcon from '@material-ui/icons/Star';
function Home6() {
  return (
    <>
    <div className='who'>
    <div className='main1'>
      <div className='data'>
        <h2>Pay Securely.</h2>
        <h4>Simple,Fast and Sequre</h4>
        <h3>Payment Process is carries out conniently and worry free</h3>
      </div>
      <div className='img'><button className='pay-dn'>Payment Done!</button></div>
      
    </div>
    <div className='underline'><u></u></div>
    <div className='head-el'>
        <h1>Our Product</h1>
    </div>
    <div className='toogle'>
    <input type="checkbox" id="switch"
                    class="checkbox" />
        <label for="switch" class="toggle">
             <div className='ship3'>
 <h2 className='ship2'>Transporter</h2>
<h2 className='ship1'>Shipper</h2>
</div>
 
        </label>
    </div>

    <div className='toogle2'>
      <div className='eclip'>
      <div className='img01'>
        {/* <h1>ssssssss</h1> */}
      </div>
      </div>
     
      <div className='text11'>
        <h1>Connecting by Transporters made Easy by our Transporters APP</h1>
        <p>Find load gor your truck.Track your truck by using gps tracking system instead of calling individual truckers.Book load with fair prices and utilize your truck efficitly.Increase your bussiness and more.</p>
        <button className='dwn-btn'><u>Download our App</u></button>
      </div>

    </div>

    <div className='card-area'>
      <div className='card'>
        <h1>"I am satisfied by the service provided by Liveasy.It is reliavle and convinent to use"</h1>
        {/* <h1 className='person'>a</h1> */}
        <h3>Mahesh shirvastav</h3>
        <div className='star'> 
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
        <StarIcon className='star5'/>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Home6
