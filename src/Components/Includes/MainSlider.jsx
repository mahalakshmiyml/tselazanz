import React from "react";
import { Carousel, Image } from "react-bootstrap";
import Image1 from "../../images/image1.jpg";

const MainSlider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Image className="d-block w-100" src={Image1} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default MainSlider;
