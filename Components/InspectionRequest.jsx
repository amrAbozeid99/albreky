import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function InspectionRequest() {
  return (
    <div className='inspectionRequest'>
      

      <div className='swiberAbout'>
      <div className="contenerAbout">
        <h1 className='AboutSwipeHead'> البريقى للستائر والمفروشات</h1>
      <h1 className='AboutSwipeHeadB'>احجز معاينة مجانية</h1>
      </div>
    
    <div className="navBinAbout animate__animated animate__flash" >
    <h5>احجز معاينة مجانية</h5>
    <span className='redSpanNav '></span>
    <Link to='/Home' className='navLink '>الرئيسية</Link>
    </div>
    
    
    </div>




<form className='inspectionRequestform'>
<h1></h1>
<input className='inspectionRequestInput' type="text" placeholder='الأسم' />
<input className='inspectionRequestInput' type="email" placeholder='البريد الالكترونى'  />
<input className='inspectionRequestInput' type="number"  placeholder='الرقم' />
<textarea className='inspectionRequestMessage' name="message"  placeholder='الرسالة' />
<input className='inspectionRequestSubmit' type="submit" value='ارسل الرسالة' />
</form>



<Footer/>






    </div>
  )
}

export default InspectionRequest
