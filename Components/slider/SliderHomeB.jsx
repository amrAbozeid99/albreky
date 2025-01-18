import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





function SliderHomeB() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 1700, 
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (
    <div className="slider-container AlphaSlaiderB">
      <Slider {...settings}>
        <div className="swiberB">
          <img src={require("./imgeB/a.jpg")}  alt="1" />
        </div>
        <div className="swiberB">
          <img src={require("./imgeB/b.jpg")} alt="2" />
        </div>
        <div className="swiberB">
          <img src={require("./imgeB/c.jpg")} alt="3" />
        </div>
        <div className="swiberB">
          <img src={require("./imgeB/d.jpg")} alt="4" />
        </div>
      </Slider>
    </div>
  );
}

export default SliderHomeB;
