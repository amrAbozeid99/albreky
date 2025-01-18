import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'


const About = () => {

  const scrollToTop = () => {window.scrollTo({ top: 0, behavior: 'smooth' });};


  return (
    <div className='about'>

    <div className='swiberAbout'>
      <div className="contenerAbout">
        <h1 className='AboutSwipeHead'> البريقى للستائر والمفروشات</h1>
      <h1 className='AboutSwipeHeadB'> من نحن </h1>
      </div>
    
    <div className="navBinAbout animate__animated animate__flash">
    <h5>من نحن</h5>
    <span className='redSpanNav '></span>
    <Link onClick={scrollToTop} to='/Home' className='navLink '>الرئيسية</Link>
    </div>
    
    
    </div>












    <div className="homeAbout">
  <img className="imgH-A" src={require("../imge/about img.png")} alt="img" />
  <div className="contH-A">
    <h5>من نحن</h5>
    <h1>من هو البريقى</h1>
    <p>شركة البريقى هى واحدو من اكبر رواد صناعة وتجارة اقمشة الستائر واقمشة المفروشات المستخدمة فى صناعة الاثاث المنزلى بجميع الاشكال</p>
  </div>
</div>

<Footer/>





    </div>
  )
}

export default About