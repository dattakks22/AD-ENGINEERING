import React from "react";
import Slider from "react-slick";
import "./projectse.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import g1 from '../Assets/g1.png';
import g2 from '../Assets/g2.png';
import g3 from '../Assets/g3.png';
import g4 from '../Assets/g4.png';
import g5 from '../Assets/g5.png';
import g6 from '../Assets/g6.png';
import g7 from '../Assets/g7.png';
import g8 from '../Assets/g8.png';
import g9 from '../Assets/g9.png';
import g10 from '../Assets/g10.png';



function SampleNextArrow(props) {
  const { className, style, onClick ,  } = props;
  return (
      <div
          className={className}
          style={{ ...style, display: "block", background: "linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)", }}
          onClick={onClick}
      />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
      <div
          className={className}
          style={{ ...style, display: "block", background: "linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)"}}
          onClick={onClick}
      />
  );
}



function Responsive() {
  var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  };
  return (

      <div className="service-main-container">
          <div className='servicese-head'>

              <span className='service-heading'>
                  OUR PROJECTS
              </span>

          </div>
          <div className="slider-container">

              <Slider {...settings}>
                  <div className='servicese-card'>
                      <img src={g1} alt="cardImg" className='card-img' />
                  </div>

                  <div className='servicese-card'>
                      <img src={g2} alt="cardImg" className='card-img' />
                  </div>

                  <div className='servicese-card'>
                      <img src={g3} alt="cardImg" className='card-img' />

                  </div>


                  <div className='servicese-card'>
                      <img src={g4} alt="cardImg" className='card-img' />

                  </div>

                  <div className='servicese-card'>
                      <img src={g5} alt="cardImg" className='card-img' />

                  </div>

                  <div className='servicese-card'>
                      <img src={g6} alt="cardImg" className='card-img' />

                  </div>

                  <div className='servicese-card'>
                      <img src={g7} alt="cardImg" className='card-img' />

                      
                  </div>

                  <div className='servicese-card'>
                      <img src={g8} alt="cardImg" className='card-img' />

                     
                  </div>

                  <div className='servicese-card'>
                      <img src={g9} alt="cardImg" className='card-img' />

                  </div>

                  <div className='servicese-card'>
                      <img src={g10} alt="cardImg" className='card-img' />

                      
                  </div>

                 


              </Slider>
          </div>
      </div>
  );
}

export default Responsive;
