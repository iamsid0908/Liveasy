import React from 'react'
import './Home3.css'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

function Home3() {
  return (
    <div className='con12'>
        <div>
      <h1 >Booking Done Online</h1>
      <h3 className='how-el'><u>How it Work?</u></h3>
      </div>
      <div className='con13'>
        <div className='con131'>
          <div className='con133'>
        <RadioButtonCheckedIcon className='circle-icon' />
        <h3>Enter Your Details</h3>
        </div>
        <>
        <div className='con132'>
          <h1 className='vi'></h1>
          <p>Enter your load detais here and details of pick up and drop</p>
        </div>
        
        </>

        <div className='con133'>
        <RadioButtonCheckedIcon className='circle-icon' />
        <h3>Payment</h3>
        </div>
        <>
        <div className='con132'>
          <h1 className='vi'></h1>
          <p>Select payment mode and fill all the detail</p>
        </div>
        
        </>

        <div className='con133'>
        <RadioButtonCheckedIcon className='circle-icon' />
        <h3>Track Your load</h3>
        </div>
        <>
        <div className='con132'>
          <h1 className='vi'></h1>
          <p>Use our GPS service to track ypr load and stay in touch</p>
        </div>
        
        </>

        <div className='ready'>
          <CheckBoxIcon className='check-icon' fontSize='large'/>
          <h3>Ready to go</h3>
        </div>
        </div>
        
        
      <div className='iphone'></div>
      </div>
      
      <div>
        <div className='line1'></div>
      </div>


     <div className='three-card'>
      <div className='card1'>
        <h4>Transperancy in the Syatem</h4>
        <p>End to end visibility of your load</p>
      </div>
      <div className='card2'>
        <h4>Reduse Cargo Theft</h4>
        <p>Liveasy GPS tracks your antime,anywheres</p>
      </div>
      <div className='card3'>
        <h4>Transperancy in the Syatem</h4>
        <p>End to end visibility of your load</p>
      </div>
     </div>
    </div>
  )
}

export default Home3
