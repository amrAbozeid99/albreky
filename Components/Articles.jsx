import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Articles() {
  return (
    <div className='articles'>




<div className='swiberAbout'>
      <div className="contenerAbout">
        <h1 className='AboutSwipeHead'> البريقى للستائر والمفروشات</h1>
      <h1 className='AboutSwipeHeadB'> المقالات </h1>
      </div>
    
    <div className="navBinAbout animate__animated animate__flash">
    <h5>المقالات</h5>
    <span className='redSpanNav '></span>
    <Link to='/Home' className='navLink '>الرئيسية</Link>
    </div>
    </div>


<div className="articlesContener">

<div className="articleContentA">
    <img className='articleContentImg' src={require("../imge/المقالات/مقال 1.png")} alt="مقال 1" />
    <h1 className="articleContenthead">قماش وتر بروف</h1>
    <p className="articleContenthead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, a omnis velit aliquam deleniti molestias quo. Doloremque nihil laboriosam eveniet.</p>
    <Link className="articleContenthead" to='#'>قراءة التفاصيل</Link>
</div>


<div className="articleContentA">
    <img className='articleContentImg' src={require("../imge/المقالات/مقال 1.png")} alt="مقال 1" />
    <h1 className="articleContenthead">قماش وتر بروف</h1>
    <p className="articleContenthead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, a omnis velit aliquam deleniti molestias quo. Doloremque nihil laboriosam eveniet.</p>
    <Link className="articleContenthead" to='#'>قراءة التفاصيل</Link>
</div>


<div className="articleContentA">
    <img className='articleContentImg' src={require("../imge/المقالات/مقال 1.png")} alt="مقال 1" />
    <h1 className="articleContenthead">قماش وتر بروف</h1>
    <p className="articleContenthead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, a omnis velit aliquam deleniti molestias quo. Doloremque nihil laboriosam eveniet.</p>
    <Link className="articleContenthead" to='#'>قراءة التفاصيل</Link>
</div>


<div className="articleContentA">
    <img className='articleContentImg' src={require("../imge/المقالات/مقال 1.png")} alt="مقال 1" />
    <h1 className="articleContenthead">قماش وتر بروف</h1>
    <p className="articleContenthead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, a omnis velit aliquam deleniti molestias quo. Doloremque nihil laboriosam eveniet.</p>
    <Link className="articleContenthead" to='#'>قراءة التفاصيل</Link>
</div>


<div className="articleContentA">
    <img className='articleContentImg' src={require("../imge/المقالات/مقال 1.png")} alt="مقال 1" />
    <h1 className="articleContenthead">قماش وتر بروف</h1>
    <p className="articleContenthead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, a omnis velit aliquam deleniti molestias quo. Doloremque nihil laboriosam eveniet.</p>
    <Link className="articleContenthead" to='#'>قراءة التفاصيل</Link>
</div>


<div className="articleContentA">
    <img className='articleContentImg' src={require("../imge/المقالات/مقال 1.png")} alt="مقال 1" />
    <h1 className="articleContenthead">قماش وتر بروف</h1>
    <p className="articleContenthead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, a omnis velit aliquam deleniti molestias quo. Doloremque nihil laboriosam eveniet.</p>
    <Link className="articleContenthead" to='#'>قراءة التفاصيل</Link>
</div>






</div>








<Footer/>

    </div>
  )
}

export default Articles