//changed img src of thirdyear and fourthyear to thirdyear1 and fourthyear1 respectively.
import React from "react";
import firstyear from './images/Banner/firstyear.gif'
import secondyear from './images/Banner/secondyear.png'
import thirdyear1 from  './images/Banner/thirdyear1.png'
import fourthyear1 from './images/Banner/fourthyear1.png'
import { Link } from "react-router-dom";

const Carousel = (props) => {
  return (
    <div id="carouselExampleInterval" className=" container carousel slide my-5 pt-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className="active" aria-current="true" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className="active" aria-current="true" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" className="active" aria-current="true" aria-label="Slide 4"></button>
        </div>
        <div className="container carousel-inner my-3 mx-8">
            <div className="carousel-item active" data-bs-interval="1800">
              <Link to={'https://youtu.be/4N2c8LMz8XI'} target='_blank'><img src={firstyear} className="d-block w-100" alt="..." style={{filter: props.mode==='dark'? 'brightness(.7) contrast(1.2)': 'brightness(1) contrast(1)', borderRadius: '10px'}} /> </Link>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <Link to={'https://youtu.be/C2QoDC1rka8'} target='_blank'><img src={secondyear} className="d-block w-100" alt="..." style={{filter: props.mode==='dark'? 'brightness(.7) contrast(1.2)': 'brightness(1) contrast(1)', borderRadius: '10px'}}/> </Link>
            </div>
            <div className="carousel-item" data-bs-interval="1800">
              <Link to={'https://youtu.be/ffuK6vt8tdY'} target='_blank'><img src={thirdyear1} className="d-block w-100" alt="..." style={{filter: props.mode==='dark'? 'brightness(.7) contrast(1.2)': 'brightness(1) contrast(1)', borderRadius: '10px'}}/> </Link>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <Link to={'https://youtu.be/VY6003vijLw'} target='_blank'><img src={fourthyear1} className="d-block w-100" alt="..." style={{filter: props.mode==='dark'? 'brightness(.7) contrast(1.2)': 'brightness(1) contrast(1)', borderRadius: '10px'}}/> </Link>
            </div>
        </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
