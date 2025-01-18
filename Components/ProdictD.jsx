import React from 'react'
import SwipeProdictD from './slider/SwipeProdictes/SwipeProdictD'
import { Link } from 'react-router-dom'
import { BsWhatsapp } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from './Footer';

function ProdictD() {


  const scrollToTop = () => {window.scrollTo({ top: 0, behavior: 'smooth' });};


  return (
    <div className='prodictA'>


<div className='swiberAbout'>
      <div className="contenerAbout">
        <h1 className='AboutSwipeHead'> البريقى للستائر والمفروشات</h1>
      <h1 className='AboutSwipeHeadB'> تفصيل اقمشة وستائر</h1>
      </div>
    
    <div className="navBinAbout animate__animated animate__flash">
    <h5>تفصيل اقمشة وستائر</h5>
    <span className='redSpanNav '></span>
    <Link onClick={scrollToTop} to='/Home' className='navLink '>الرئيسية</Link>
    </div>
    
    
    </div>



    <div className='prodictACountaner'>
        <div className='prodictSwipe'><SwipeProdictD/></div>
    

    <div className="prodictText">



<p>تفصيل اقمشة وستائر بأعلى جودة وأسعار مميزة، هل تبحث عن تفصيل اقمشة وستائر بجودة عالية وأسعار تنافسية؟ شركة البريقي نقدم لك خدمة تفصيل ممتازة تناسب جميع احتياجاتك.

البريقي شركة متكاملة تقوم بتقديم جميع خدمات الستائر، حيث نقوم بتوفير خدمة تفصيل وتركيب ستائر بجميع الاشكال والانواع حسب طلب العميل بالاضافة إلى امتلاك الستائر الجاهزة، نسعى فى تقديم جودة عالية، أسعار تنافسية، مجموعة واسعة من الخيارات، فريق من الخبراء، خدمة المعاينة مجانية.

نستخدم أفضل أنواع الأقمشة ونوفر لك مجموعة واسعة من الخيارات لتناسب ذوقك واحتياجاتك. كما نقدم لك خدمة تصميم ستائر تناسب ديكور منزلك، لدينا فريق من الخبراء ذوي الخبرة في مجال تفصيل الاقمشة والستائر، والذين يحرصون على تقديم أفضل خدمة لك، نقدم لك أيضاً خدمة المعاينة في منزلك مجاناً، لا تتردد في التواصل مع شركة البريقى انت دائما متميز.</p>


<Link onClick={scrollToTop} to='/InspectionRequest' className='buttonProdictToFree'>احصل على معاينة مجانية</Link>

</div>




</div>
    <div className="prodictContact">
      <a target='_blank' href="#" className="prodictContactwatsapp"><BsWhatsapp /></a>
      <a target='_blank' href="#" className="prodictContactphone"><FaPhoneAlt /></a>
    </div>


<Footer/>

    </div>
  )
}

export default ProdictD