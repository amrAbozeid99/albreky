import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import ReactPlayer from 'react-player';

function Opinios() {
  return (
    <div className='opinios'>

<div className='swiberAbout'>
      <div className="contenerAbout">
        <h1 className='AboutSwipeHead'> البريقى للستائر والمفروشات</h1>
      <h1 className='AboutSwipeHeadB'> اراء العملاء</h1>
      </div>
    
    <div className="navBinAbout animate__animated animate__flash">
    <h5>اراء العملاء</h5>
    <span className='redSpanNav '></span>
    <Link to='/Home' className='navLink '>الرئيسية</Link>
    </div>
    
    
    </div>


<div className="opiniosContaner">


<div className="opiniosVideoA">
<ReactPlayer width={'100%'}  url="https://youtu.be/h9pe94JOMnU" controls/> 
</div>

<div className="opiniosVideoA">
<ReactPlayer width={'100%'} url="https://youtu.be/xiIwZxJmxTA" controls/> 
</div>

<div className="opiniosVideoA">
<ReactPlayer width={'100%'}  url="https://youtu.be/Ckw-iFIsxJE" controls/> 
</div>

<div className="opiniosVideoA">
<ReactPlayer  width={'100%'}  url="https://youtu.be/IDY8k3PbLGQ" controls/> 
</div>

<div className="opiniosVideoA">
<ReactPlayer width={'100%'}  url="https://youtu.be/s-EguAYvVvE" controls/> 
</div>

<div className="opiniosVideoA">
<ReactPlayer width={'100%'}  url="https://youtu.be/ddUjRNReLlU" controls/> 
</div>


</div>




<Footer/>


    </div>
  )
}

export default Opinios