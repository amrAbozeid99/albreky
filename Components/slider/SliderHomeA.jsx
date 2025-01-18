import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SliderHomeA() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1700, 
      };

  return (
    <div className="slider-container">
      <Slider {...settings}>

        <div className="frimeSwipesImg">
          <img className="swipesImg" src={require("./imge/خلفيىة 1.PNG")} alt="1" />
        </div>
        <div className="frimeSwipesImg">
        <img className="swipesImg" src={require("./imge/خلفيىة 2.png")} alt="2" />
        </div>
        <div className="frimeSwipesImg">
        <img className="swipesImg" src={require("./imge/خلفيىة 3.JPG")} alt="3" />
        </div>
        
      </Slider>
    </div>
  );
}

export default SliderHomeA;
