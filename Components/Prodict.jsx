import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { BsWhatsapp } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";


function Prodict() {

  const scrollToTop = () => {window.scrollTo({ top: 0, behavior: 'smooth' });};

  return (
    <div className='prodict'>
        
        <div className='swiberAbout'>
      <div className="contenerAbout">
        <h1 className='AboutSwipeHead'> البريقى للستائر والمفروشات</h1>
      <h1 className='AboutSwipeHeadB'> منتجات البريقى </h1>
      </div>
    
    <div className="navBinAbout animate__animated animate__flash">
    <h5>منتجات البريقى</h5>
    <span className='redSpanNav '></span>
    <Link onClick={scrollToTop} to='/Home' className='navLink '>الرئيسية</Link>
    </div>
    
    
    </div>



    <div className="prodictContaner">

    <div className="prodictContanercart">

    <div className="prodictcart">
    <Link onClick={scrollToTop} to='/ProdictA' className="prodictName">اقمشة</Link>
    <img className='prodictImgCart' src={require("../imge/imgeTwo/a.jpg")} alt="" />
    <p className='prodictTitel'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>


    <div className="prodictcart">
    <Link onClick={scrollToTop} to='/ProdictB' className="prodictName">ستائر</Link>
    <img className='prodictImgCart' src={require("../imge/imgeTwo/b.jpg")} alt="" />
    <p className='prodictTitel'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>


    <div className="prodictcart">
    <Link onClick={scrollToTop} to='/ProdictC' className="prodictName">مفروشات</Link>
    <img className='prodictImgCart' src={require("../imge/imgeTwo/c.jpg")} alt="" />
    <p className='prodictTitel'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>


    <div className="prodictcart">
    <Link onClick={scrollToTop} to='ProdictD' className="prodictName">تفصيل اقمشة وستائر</Link>
    <img className='prodictImgCart' src={require("../imge/imgeTwo/d.jpg")} alt="" />
    <p className='prodictTitel'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>










    </div>

    <div className="prodictContact">
      <Link to='#' className="prodictContactwatsapp"><BsWhatsapp /></Link>
      <Link to='#' className="prodictContactphone"><FaPhoneAlt /></Link>
    </div>
    </div>












<Footer/>


    </div>
  )
}

export default Prodict