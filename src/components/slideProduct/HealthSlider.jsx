"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./HealthSlider.css";

const categories = [
  { title: "Health Care", img: "/img/healthcare.jpg" },
  { title: "Beauty Care", img: "/img/beautycare.jpg" },
  { title: "Skin Care", img: "/img/skincare.jpg" },
  { title: "Baby Care", img: "/img/babycare.jpg" },
  { title: "Hair Care", img: "/img/haircare.jpg" },
  { title: "Oral Care", img: "/img/oralcare.jpg" },
  { title: "Medicines", img: "/img/medicines.jpg" },
  { title: "Face Wash", img: "/img/faceWash.jpg" },
];

export default function HealthSlider() {
  return (
    <div className="health-slider">
      {/* Header */}
      <div className="health-header">
        <h2>Shop by Health Concerns</h2>
        <a href="#" className="flex items-center gap-2">
          View All <FaArrowRight />
        </a>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 }, // ✅ موبايل صغير: يعرض منتجين
          480: { slidesPerView: 2, spaceBetween: 12 }, // ✅ موبايل متوسط: برضو منتجين
          640: { slidesPerView: 3, spaceBetween: 15 }, // تابلت صغير
          768: { slidesPerView: 4, spaceBetween: 18 }, // تابلت متوسط
          1024: { slidesPerView: 5, spaceBetween: 20 }, // لابتوب صغير
          1280: { slidesPerView: 6, spaceBetween: 20 }, // لابتوب كبير
          1536: { slidesPerView: 7, spaceBetween: 24 }, // شاشات كبيرة
        }}
        className="health-swiper"
      >
        {categories.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="health-item">
              <div className="health-img">
                <img src={item.img} alt={item.title} />
              </div>
              <p>{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation arrows */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}
