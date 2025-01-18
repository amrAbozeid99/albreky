import React from 'react'
import SwipeProdictB from './slider/SwipeProdictes/SwipeProdictB'
import { Link } from 'react-router-dom'
import { BsWhatsapp } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from './Footer';

function ProdictB() {

  const scrollToTop = () => {window.scrollTo({ top: 0, behavior: 'smooth' });};


  return (
    <div className='prodictA'>


<div className='swiberAbout'>
      <div className="contenerAbout">
        <h1 className='AboutSwipeHead'> البريقى للستائر والمفروشات</h1>
      <h1 className='AboutSwipeHeadB'> ستائر</h1>
      </div>
    
    <div className="navBinAbout animate__animated animate__flash">
    <h5>ستائر</h5>
    <span className='redSpanNav '></span>
    <Link onClick={scrollToTop} to='/Home' className='navLink '>الرئيسية</Link>
    </div>
    
    
    </div>



    <div className='prodictACountaner'>
        <div className='prodictSwipe'><SwipeProdictB/></div>
    

    <div className="prodictText">




<p>تعتبر الستائر من أهم القطع الاساسية التي تضيف لمسة جمالية للمكان، كما أنها تضيف لمسة فنية مع الأثاث، لذلك يوجد العديد من اشكال واسعار الستائر الجاهزة  بمختلف أنواعها التي تناسب جميع الأذواق ومختلف الأماكن.

يعد البريقي افضل شركه ستائر في مصر، حيث تتميز بتقديم افضل اسعار الستائر الجاهزة بأفضل الخامات بالإضافة إلى توفير خدمة التوصيل والتركيب. 

هل تبحث عن ستائر أنيقة وعملية في نفس الوقت؟ ستائرنا هي الحل الأمثل لك! تتميز ستائر شركة البريقي بمجموعة من المزايا التي تجعلها الخيار المثالي لبيتك نقدم مجموعة من الستائر عالية الجودة واليك بعض المميزات:</p>

<p><h1>1. جودة عالية:
</h1>
مصنوعة من أجود أنواع الأقمشة، ستائرنا متينة وتدوم لسنوات طويلة.</p>

<p><h1>2. تصميمات عصرية:</h1>
نقدم مجموعة واسعة من التصميمات العصرية التي تناسب جميع الأذواق.

</p>


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

export default ProdictB