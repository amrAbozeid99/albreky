import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import MapComponent from './MapComponent'

function Contact() {
  return (
    <div className='contact'>
      
      <div className='swiberAbout'>
      <div className="contenerAbout">
        <h1 className='AboutSwipeHead'> البريقى للستائر والمفروشات</h1>
      <h1 className='AboutSwipeHeadB'> تواصل معنا</h1>
      </div>
    
    <div className="navBinAbout animate__animated animate__flash">
    <h5>تواصل معنا</h5>
    <span className='redSpanNav '></span>
    <Link to='/Home' className='navLink '>الرئيسية</Link>
    </div>
    
    
    </div>


    <div className="contactContaner">

<div className='contactForm'>
    <form className='contactDataform'>
    <h1>تواصل معنا</h1>
<h1></h1>
<input className='inspectionRequestInput' type="text" placeholder='الأسم' />
<input className='inspectionRequestInput' type="email" placeholder='البريد الالكترونى'  />
<input className='inspectionRequestInput' type="number"  placeholder='الرقم' />
<textarea className='inspectionRequestMessage' name="message"  placeholder='الرسالة' />
<input className='inspectionRequestInput' type="text" placeholder='الكود' />
<input className='inspectionRequestSubmit' type="submit" value='ارسل الرسالة' />
</form>
</div>

<div className="googleMab"><MapComponent /></div>



    </div>





















<Footer/>



    </div>
  )
}

export default Contact
