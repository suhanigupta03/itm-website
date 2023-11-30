import React from 'react'
import './prebook.css'
import arrow from  '../assets/arrow.jpg'
import whatsapp from '../assets/whatsapp_icon.webp'
function Prebook() {
  return (
    <div>
      <div className=' book'>
        <button  className='book_button1'><a  href="tel:+917881106480"  >Book your sheet Now</a></button>
        {/* <img src={arrow} alt='' className='arrow_img'/> */}
      
        <span className='book_chat'> | |&nbsp;Chat with your personal counsellor  &nbsp;  | | &nbsp; Juat say Hii &nbsp; | | </span>
        <a  href="https://api.whatsapp.com/send?phone=7307536494&text=Hello."
        target="_blank"><img src={whatsapp} alt='' className='arrow_img' /></a>
         <button className='book_button2'><a href="https://api.whatsapp.com/send?phone=7307536494&text=Hello Please share you neet scorecard."
        target="_blank">Pre Book your Sheet</a></button> 
        
      </div>
    </div>
  )
}

export default Prebook
