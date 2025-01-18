import React from 'react'
import SwipeProdictA from './slider/SwipeProdictes/SwipeProdictA'
import { Link } from 'react-router-dom'
import { BsWhatsapp } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from './Footer';

function ProdictA() {

  const scrollToTop = () => {window.scrollTo({ top: 0, behavior: 'smooth' });};


  return (
    <div className='prodictA'>


<div className='swiberAbout'>
      <div className="contenerAbout">
        <h1 className='AboutSwipeHead'> البريقى للستائر والمفروشات</h1>
      <h1 className='AboutSwipeHeadB'> اقمشة</h1>
      </div>
    
    <div className="navBinAbout animate__animated animate__flash">
    <h5>اقمشة</h5>
    <span className='redSpanNav '></span>
    <Link onClick={scrollToTop} to='/Home' className='navLink '>الرئيسية</Link>
    </div>
    
    
    </div>



    <div className='prodictACountaner'>
        <div className='prodictSwipe'><SwipeProdictA/></div>
    

    <div className="prodictText">
<p
>وداعاً للستائر المملة، هل تبحث عن ستائر تُضفي لمسة من الأناقة والجمال على منزلك، نقدم لك أقمشة ستائرنا الفريدة من نوعها وهذا راجع إلى اختيارنا افضل انواع الاقمشة بعناية كبيرة لاننا نريد التميز والريادة بالاضافة الى السعي الدائم فى تقديم كل ما هو جديد فى عالم أقمشة الستائر.

يعتبر اختيار الأقمشة من اهم الامور التي تحتاج إلي دقة عالية في اختيار افضل الخامات وافضل قماش ستائر، لذلك تقدم شركة البريقي اكبر تشكيلة مميزة من قماش ستائر ومفروشات مصنوعة بافضل خامات القماش الموجود في السوق المصري.

بالإضافة إلى تقديم اسعار اقمشة ستائر تناسب جميع الاحتياجات، تقدم شركة البريقي افضل سعر متر قماش ستائر في مصر بأفضل جودة للخامات.
</p>

<p>
مميزات اقمشة البريقي

تنوع لا مثيل له: لدينا مجموعة واسعة من الأقمشة بألوان وتصميمات تناسب جميع الأذواق.

جودة عالية: نستخدم أفضل أنواع الأقمشة التي تتميز بالمتانة وطول العمر.

سهولة التنظيف: يمكن غسل ستائرنا بسهولة دون أن تفقد رونقها.

أسعار تنافسية: نقدم لك أفضل الأسعار في السوق.

مع ستائرنا، ستحصل على:

منزل أنيق وجميل: ستضفي ستائرنا لمسة من الفخامة على منزلك وتجعله أكثر راحة ودفئًا. تحكم في الضوء: يمكنك التحكم في كمية الضوء التي تدخل إلى منزلك باستخدام ستائرنا. خصوصية تامة: ستوفر لك ستائرنا الخصوصية التي تحتاجها.
لا تنتظر أكثر! اطلب ستائرنا اليوم واستمتع بجميع مميزاتها.

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

export default ProdictA