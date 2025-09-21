"use client";
import React from "react";
import "./Support.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const categories = [
  { title: "Free Shipping", desc: "On order over $100", img: "/img/features1.png" },
  { title: "Flexible & Easy Return", desc: "Return within 14 days", img: "/img/features2.png" },
  { title: "24/7 Support Services", desc: "Any Time Customers Support", img: "/img/features3.png" },
  { title: "Secure Payment", desc: "100% Fast & Secure Payment", img: "/img/features4.png" },
];

const Support = () => {
  return (
    <section className="features">
      <div className="container">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 }, 
            768: { slidesPerView: 1, spaceBetween: 20 }, 
            1024: { slidesPerView: 4, spaceBetween: 20 }, 
          }}
          className="products-slider"
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="feature_item">
                <img src={item.img} alt={item.title} className="feature_img" />
                <div className="text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Support;
