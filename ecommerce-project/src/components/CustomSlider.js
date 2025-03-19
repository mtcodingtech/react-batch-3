"use client";
import React from "react";
import Slider from "react-slick";

import { Box } from "@mui/material";
import { images } from "@/utils/data";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBack, Delete } from "@mui/icons-material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={className}
      style={{
        ...style,
        display: "block",
        right: "5rem",
        position: "absolute",
        top: "50%",
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={className}
      style={{
        ...style,
        left: "5rem",
        zIndex: 1,
        position: "absolute",
        top: "50%",
      }}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon />
    </div>
  );
}

export default function CustomSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Box className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => {
          return (
            <React.Fragment key={index}>
              <Image
                src={image}
                alt="img"
                width={1200}
                height={500}
                style={{
                  height: 400,
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </React.Fragment>
          );
        })}
      </Slider>
    </Box>
  );
}
