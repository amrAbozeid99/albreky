import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../imge/logo.png'
import { Dropdown } from 'bootstrap';
import { DropdownHeader, DropdownItem, DropdownMenu } from 'react-bootstrap';
import { FaAngleDown  } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FcFeedback } from "react-icons/fc";
import SocialButton from './SocialButton';


const Nav = () => {

  const scrollToTop = () => {window.scrollTo({ top: 0, behavior: 'smooth' });};

  const [navFall,setNavFall]=useState(false)
  const navFallcodon = ()=>{setNavFall(true);window.scrollTo({ top: 0, behavior: 'smooth' });}
  const navFallcodoff = ()=>{setNavFall(false);window.scrollTo({ top: 0, behavior: 'smooth' });}
  
    const [nav,setNav]=useState(false)
    const changBackground = () => {
      if(window.scrollY>=50){setNav(true);}
      else{setNav(false)}
    }
  window.addEventListener('scroll',changBackground,navFallcodon,navFallcodoff )

  return (
    <>
    <div className='navPe'>
    <nav className={nav ? 'nav normal':"nav"} >

    <Link onClick={scrollToTop} to='/'><img src={logo} alt=""  style={{width:'40px', height:'40px'}}/></Link>
    <Link onClick={scrollToTop} to='/Home' className='navLink BigNavLink'>الرئيسية</Link>
    <span className='redSpanNav BigNavLink'></span>
    <Link onClick={scrollToTop} to='/About' className='navLink BigNavLink'>من نحن</Link>
    <span className='redSpanNav BigNavLink'></span>
    <div className="dropdown">
    <Link onClick={scrollToTop} to='/Services' className="dropbtn BigNavLink">خدماتنا<FaAngleDown /></Link>
    <div className="dropdown-content">
        <Link onClick={scrollToTop} to='/ServicesA'>تفصيل</Link>
        <Link onClick={scrollToTop} to='/ServicesB'>بيع اقمشة</Link>
      </div>
    </div>
    <span className='redSpanNav BigNavLink'></span>
    <Link onClick={scrollToTop} to='/Articles' className='navLink BigNavLink'>المقالات</Link>
    <span className='redSpanNav BigNavLink'></span>
    <Link onClick={scrollToTop} to='/InspectionRequest' className='navLink BigNavLink'>أحجز معاينة مجانية</Link>
    <span className='redSpanNav BigNavLink'></span>

<div className="dropdown">
      <Link to='/Prodict' className="dropbtn BigNavLink">المنتجات<FaAngleDown /></Link>
      <div className="dropdown-content">
        <Link onClick={scrollToTop} to='/ProdictA'>اقمشة</Link>
        <Link onClick={scrollToTop} to='/ProdictB'>ستائر</Link>
        <Link onClick={scrollToTop} to='/ProdictC'>مفروشات</Link>
        <Link onClick={scrollToTop} to='ProdictD'>تفصيل اقمشة وستائر</Link>
      </div>
    </div>

    <span className='redSpanNav BigNavLink'></span>
    <Link onClick={scrollToTop} to='/Opinios' className='navLink BigNavLink'>الاراء</Link>
    <span className='redSpanNav BigNavLink'></span>
    <Link onClick={scrollToTop} to='/Contact' className='navLink BigNavLink'>تواصل معنا</Link>
    <button className='smartNav' onClick={navFallcodon} ><FaAlignJustify /></button>
</nav>
</div>
<ul className={navFall ? 'ulNavSmail' : 'navFall'}>
  <Link to='/Home' className='navLinkB'><li className='liNavSmail' onClick={navFallcodoff}>الرئيسية</li></Link>
  <Link to='/About' className='navLinkB'><li className='liNavSmail' onClick={navFallcodoff}>من نحن</li></Link>
  <Link to='/Services' className='navLinkB'><li className='liNavSmail' onClick={navFallcodoff}>خدماتنا</li></Link>
  <Link to='/Articles' className='navLinkB'><li className='liNavSmail' onClick={navFallcodoff}>المقالات</li></Link>
  <Link to='/InspectionRequest' className='navLinkB'><li className='liNavSmail' onClick={navFallcodoff}>أحجز معاينة مجانية</li></Link>
  <Link to='/Prodict' className='navLinkB'><li className='liNavSmail' onClick={navFallcodoff}>المنتجات</li></Link>
  <Link to='/Opinios' className='navLinkB'><li className='liNavSmail' onClick={navFallcodoff}>الاراء</li></Link>
  <Link to='/Contact' className='navLinkB'><li className='liNavSmail' onClick={navFallcodoff}>تواصل معنا</li></Link>
</ul>


<div className="sicel">
<SocialButton/>
</div>

</>
  )
}

export default Nav

