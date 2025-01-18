import React from 'react'
import SliderHomeA from './slider/SliderHomeA'
import SliderHomeB from './slider/SliderHomeB'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { Dropdown } from 'bootstrap'
import { FcPrevious } from "react-icons/fc";

import 'animate.css';

const Home = () => {

  const scrollToTop = () => {window.scrollTo({ top: 0, behavior: 'smooth' });};


  return (
    <div className='home'>
        

<SliderHomeA/>

{/*  __________________________________________________________________________________________________________________  */}


<div className='coces'>
  <div className="coc animate__animated animate__flash"><h2>أفضل الخامات</h2><img className='cocesimg' width={'40px'} src={require("../imge/imgeTwo/logoa.png")} alt="test" /></div>
  <div className="coc animate__animated animate__flash"><h2>تشكيلة واسعة</h2><img className='cocesimg' width={'40px'} src={require("../imge/imgeTwo/logob.png")} alt="test" /></div>
  <div className="coc animate__animated animate__flash"><h2>معاينة مجانية</h2><img className='cocesimg' width={'40px'} src={require("../imge/imgeTwo/logoc.png")} alt="test" /></div>
  <div className="coc animate__animated animate__flash"><h2>افضل الاسعار والعروض</h2><img className='cocesimg' width={'40px'} src={require("../imge/imgeTwo/logod.png")} alt="test" /></div>
  <div className="coc animate__animated animate__flash"><h2>توصيل مجانى</h2><img className='cocesimg' width={'40px'} src={require("../imge/imgeTwo/logoe.png")} alt="test" /></div>
</div>

{/*  __________________________________________________________________________________________________________________  */}

<div className="homeAbout">
  <img className="imgH-A" src={require("../imge/about img.png")} alt="img" />
  <div className="contH-A">
    <h5>من نحن</h5>
    <h1>من هو البريقى</h1>
    <p>شركة البريقى هى واحدو من اكبر رواد صناعة وتجارة اقمشة الستائر واقمشة المفروشات المستخدمة فى صناعة الاثاث المنزلى بجميع الاشكال</p>
    <Link onClick={scrollToTop}  data-aos="fade-up" to='/About'><div className="goToAbout"><h1 className='goToAboutsss'>معرفة المزيد ...</h1></div></Link>
  </div>
</div>

{/*  __________________________________________________________________________________________________________________  */}

<div className="homeprodicte">
  <h1 className='homeprodicteHead'>منتجات البريقى</h1>

  <div className='homeprodicteData'>
      <div className="homeProdictImg homeProdictImgbackA"><div className="agag"><Link onClick={scrollToTop} to='/ProdictA'><div className='gaga'>اقمشة</div></Link></div></div>
      <div className="homeProdictImg homeProdictImgbackB"><div className="agag"><Link onClick={scrollToTop} to='/ProdictB'><div className='gaga'>ستائر</div></Link></div></div>
      <div className="homeProdictImg homeProdictImgbackC"><div className="agag"><Link onClick={scrollToTop} to='/ProdictC'><div className='gaga'>مفروشات</div></Link></div></div>
      <div className="homeProdictImg homeProdictImgbackD"><div className="agag"><Link onClick={scrollToTop} to='/ProdictD'><div className='gaga'>تفصيل اقمشة وستائر</div></Link></div></div>
      <div className="homeProdictImg homeProdictImgbackE"><Link onClick={scrollToTop} to='/Prodict' className='homeProdictImgbackE'><FcPrevious/>...المذيد</Link></div>

  </div>

</div>

{/*  __________________________________________________________________________________________________________________  */}

<div className="homedoitHead">
<h1 className='homedoitHeadPr'>الاعمال السابقة</h1>
<SliderHomeB/>
</div>

{/*  __________________________________________________________________________________________________________________  */}

<Footer />

    </div>
  )
}

export default Home