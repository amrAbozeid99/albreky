import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className="upFooter">
            <div className="upFooterContenta upFooterContent"><img src={require("../imge/logo.png")} width={'50px'} alt="logo"/> <p>شركة البريقى للستائر هى الاولى فى تصنيع وتفصيل جميع انواع الستائر تتميز شركة البريقى بأن لديها خبرة طويلة فى مجال الستائر ونقوم باستخدام اجود الخامات فى الاقمشة والاكسسوارات.</p> </div>
            <div className="upFooterContentb upFooterContent"><h1>روابط مفيدة</h1> <Link to='#'>تواصل معنا</Link> <Link to='#'>المنتجات</Link> <Link to='#'>من نحن</Link> <Link to='#'>اراء العملاء</Link></div>
            <div className="upFooterContentc upFooterContent"><h1>مساعدة ودعم</h1></div>
            <div className="upFooterContentd upFooterContent"><h1>تواصل معنا</h1><a target='blank' href="#">معرض 211 هلا مول التسعين الجنوبى بجوار سيراميك كليوبتراالدور الثانى</a><h3>info@albreky.com</h3><h3>01223420672</h3></div>
        </div>

        <div className="underFooter"><div className="underFooterR"><h2>cangrowonline</h2>all rights reserved designed<h2></h2></div><div className="underFooterL"><div className='sicel'></div></div></div>

    </footer>
  )
}

export default Footer