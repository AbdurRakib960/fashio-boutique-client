import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { carouselDatas } from "../../data";
import "./Slider.css";

const Slider = () => {
  const data = carouselDatas;
  return (
    <Carousel showThumbs={false} autoPlay={true}  infiniteLoop={true} width={"100%"}>
      {data.map((item) => (
        <div key={item.id} className="carousel-wrapper">
          <div className="img-wrapper">
            <img src={item.img} alt="" />
          </div>
          <div className="description-wrap">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>Show Now</button>
            </div>
          </div>
      ))}
    </Carousel>
  );
};

export default Slider;
