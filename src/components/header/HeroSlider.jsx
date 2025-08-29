"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";


const images = [
  {
    img: "/img/product2.png",
    title: "Sanitize For Safety",
    subtitle: "Protect Your Health",
    desc: "Our only wish is to introduce you to the products  of the leading Be don’t miss brands in gardening.",
  },
  {
    img: "/img/product1.png",
    title: "Pueraria Mirifica Liquid Protect Your Health",
    desc: "Discover the best products to keep you and your loved ones safe and healthy all the time.",
  },
];

const HeroSlider = () => {
  return (
    <div className="hero">
      <div className="container">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="content">
                <h3>
                  {item.title} <br /> {item.subtitle}
                </h3>
                <p>{item.desc}</p>
                <Link className="btn shop-btn" href="/">
                  Shop Now →
                </Link>
              </div>
              <img
                src={item.img}
                alt={`slide-${index}`}
                className="hero-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
