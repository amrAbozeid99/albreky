import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick';
import  { useRef } from 'react';

function VerticalSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="SwipeProdictAlpha">
    <button className="Sliderbutton" onClick={prevSlide}>Up</button>
    <div className="SwipeProdictFream">
      <Slider ref={sliderRef} {...settings}>
        <div className="SwipeProdictFreamImg">
        <h3><img className="SwipeProdictImg" src="https://albreky.com/assets/images/galleries/1690470604CyLw6RUW.jpg" alt="" /></h3>
        </div>
        <div className="SwipeProdictFreamImg">
        <h3><img className="SwipeProdictImg" src="https://albreky.com/assets/images/galleries/1690470604CyLw6RUW.jpg" alt="" /></h3>
        </div>
      </Slider>
    </div>
      <button className="Sliderbutton" onClick={nextSlide}>Down</button>
      </div>
  );
}

export default VerticalSlider;
