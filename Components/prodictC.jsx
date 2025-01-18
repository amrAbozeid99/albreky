import React from 'react'
import SwipeProdictC from './slider/SwipeProdictes/SwipeProdictC'
import { Link } from 'react-router-dom'
import { BsWhatsapp } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from './Footer';

function ProdictC() {


  const scrollToTop = () => {window.scrollTo({ top: 0, behavior: 'smooth' });};


  return (
    <div className='prodictA'>


<div className='swiberAbout'>
      <div className="contenerAbout">
        <h1 className='AboutSwipeHead'> البريقى للستائر والمفروشات</h1>
      <h1 className='AboutSwipeHeadB'> مفروشات</h1>
      </div>
    
    <div className="navBinAbout animate__animated animate__flash">
    <h5>مفروشات</h5>
    <span className='redSpanNav '></span>
    <Link onClick={scrollToTop} to='/Home' className='navLink '>الرئيسية</Link>
    </div>
    
    
    </div>



    <div className='prodictACountaner'>
        <div className='prodictSwipe'><SwipeProdictC/></div>
    

    <div className="prodictText">


<p>أضف لمسة من الأناقة والفخامة لمنزلك مع مفروشات البريقي الفريدة من نوعها؛ هل تبحث عن مفروشات تمنح منزلك لمسة من الأناقة والفخامة؟ لا تبحث أكثر! نقدم لك تشكيلة واسعة من أجود أنواع المفروشات وأقمشة الانتريهات، والستائر، بأسعار تنافسية تلبي جميع احتياجاتك.

يبحث الكثير من الناس عن قماش انتريهات و اماكن بيع قماش تنجيد الانتريهات، لذلك تقدم شركة البريقي مجموعة متنوعة من أقمشة التنجيد بجميع الاشكال العصرية وافضل الخامات بالاضافة الى اسعار اقمشة تنجيد متنوعة حسب احتياج العميل. 

نسعى دائما للتميز ونحافظ على أهم المعايير التى تجعلنا دائما في الصدارة وفيما يلي سنوضح أهم المعايير التي نتميز بها:</p>


<p><h1>تشكيلة واسعة:</h1> نقدم لك تشكيلة واسعة من المفروشات والأقمشة بألوان وتصاميم متنوعة لتناسب جميع الأذواق.
</p>

<p><h1>جودة عالية:</h1> نحرص على استخدام أفضل المواد الخام في صناعة جميع منتجاتنا، لضمان حصولك على منتجات تدوم لسنوات طويلة.</p>

<p><h1>أسعار تنافسية: </h1> نقدم لك أسعارًا تنافسية تلبي جميع احتياجاتك.</p>



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

export default ProdictC