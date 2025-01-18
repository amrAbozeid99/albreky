import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'


function Services() {

  const scrollToTop = () => {window.scrollTo({ top: 0, behavior: 'smooth' });};


  return (
    <div className='services'>
      

      <div className='swiberAbout'>
      <div className="contenerAbout">
        <h1 className='AboutSwipeHead'> البريقى للستائر والمفروشات</h1>
      <h1 className='AboutSwipeHeadB'> خدمات البريقى </h1>
      </div>
    
    <div className="navBinAbout animate__animated animate__flash">
    <h5> خدمات البريقى </h5>
    <span className='redSpanNav '></span>
    <Link onClick={scrollToTop} to='/Home' className='navLink '>الرئيسية</Link>
    </div>
    </div>


<div className="countanerServicer">

<Link onClick={scrollToTop} to='/ServicesA' className="ServicerFream">
  <h1 style={{  color:' whitesmoke'}}>تفصيل</h1>
  <div className='detalesservices'>
  <h4 style={{  color:' whitesmoke'}}>:اتصل بنا</h4>
  <h2 style={{  color:' goldenrod'}}>01223420672</h2>
  </div>
</Link>


<Link onClick={scrollToTop} to='/ServicesB' className="ServicerFream">
  <h1 style={{  color:' whitesmoke'}}>بيع قماش</h1>
  <div className='detalesservices'>
  <h4 style={{  color:' whitesmoke'}}>:اتصل بنا</h4>
  <h2 style={{  color:' goldenrod'}}>01223420672</h2>
  </div>
</Link>


</div>














<Footer/>



      
    </div>
  )
}

export default Services
