"use client";

import Slider from "react-slick";

import Image from "next/image";

import feedback1 from "@/public/png/feedback/1.png";
import feedback2 from "@/public/png/feedback/2.png";
import feedback3 from "@/public/png/feedback/3.png";

export const Feedback = () => {
  const settings = {
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const slides = [
    {
      src: feedback1,
      alt: "feedback1",
    },
    {
      src: feedback2,
      alt: "feedback2",
    },
    {
      src: feedback3,
      alt: "feedback3",
    },
  ];
  return (
    <section>
      <div className={"container mx-auto px-4 py-24 sm:px-6"}>
        <h2 className={"h2 mb-12 text-center"}>Відгуки</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className={"p-2 outline-none"}>
                <Image src={slide.src} alt={slide.alt} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
