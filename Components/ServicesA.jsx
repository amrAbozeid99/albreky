import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'


function ServicesA() {
  return (
    <div className='servicesA'>

          <div className='swiberAbout'>
      <div className="contenerAbout">
        <h1 className='AboutSwipeHead'> البريقى للستائر والمفروشات</h1>
      <h1 className='AboutSwipeHeadB'>تفصيل</h1>
      </div>
    
    <div className="navBinAbout animate__animated animate__flash">
    <h5>تفصيل</h5>
    <span className='redSpanNav '></span>
    <Link to='/Home' className='navLink '>الرئيسية</Link>
    </div>
    
    
    </div>


<div className="servicesAContaner">
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam fugit ducimus adipisci voluptates voluptatibus odio error molestiae, quod ad libero cupiditate quaerat dolor cumque quas praesentium saepe reprehenderit eligendi eius accusamus sapiente optio minus. Quibusdam ad omnis repellat eveniet, culpa tenetur ab nobis dicta cum esse maiores molestias asperiores nihil minus excepturi expedita? Porro non quod fuga sapiente officia, cum quo eius corporis soluta excepturi odit asperiores delectus dolorem est voluptates eaque rerum labore. Voluptas, deleniti quisquam! Cum nulla non labore, vero quis consectetur. Deserunt voluptatum a ullam sequi sapiente quae eos magni, dolores dignissimos necessitatibus itaque saepe soluta numquam?</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam fugit ducimus adipisci voluptates voluptatibus odio error molestiae, quod ad libero cupiditate quaerat dolor cumque quas praesentium saepe reprehenderit eligendi eius accusamus sapiente optio minus. Quibusdam ad omnis repellat eveniet, culpa tenetur ab nobis dicta cum esse maiores molestias asperiores nihil minus excepturi expedita? Porro non quod fuga sapiente officia, cum quo eius corporis soluta excepturi odit asperiores delectus dolorem est voluptates eaque rerum labore. Voluptas, deleniti quisquam! Cum nulla non labore, vero quis consectetur. Deserunt voluptatum a ullam sequi sapiente quae eos magni, dolores dignissimos necessitatibus itaque saepe soluta numquam?</p>
</div>




<Footer/>

    </div>
  )
}

export default ServicesA
