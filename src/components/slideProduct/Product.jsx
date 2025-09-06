"use client";
import { useState, useEffect } from "react";
import { products } from "../../productsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import Link from "next/link";

// ✅ استدعاء Cart Context
import { useCart } from "../../../src/context/CartContext";

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Baby Care");

  const { addToCart, wishlist, toggleWishlist } = useCart(); // ✅ جلب دوال من الكونتكست

  useEffect(() => {
    setFilteredProducts(products.filter((p) => p.category === activeCategory));
  }, [activeCategory]);

  return (
    <div className="products-container">
      {/* Header */}
      <div className="health-header">
        <div className="left-section">
          <h2 className="header-title">New Launches</h2>
          <div className="category-buttons">
            <button
              className={`category-btn ${
                activeCategory === "Baby Care" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("Baby Care")}
            >
              Baby Care
            </button>
            <button
              className={`category-btn ${
                activeCategory === "Health Care" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("Health Care")}
            >
              Health Care
            </button>
          </div>
        </div>

        <a href="#" className="view-all">
          View All <FaArrowRight />
        </a>
      </div>

      {/* Swiper Slider */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={6}
        className="products-slider"
      >
        {filteredProducts.map((product) => {
          const isInWishlist = wishlist.some((item) => item.id === product.id);

          return (
            <SwiperSlide key={product.id}>
              <div className="product-card">
                {/* Icons */}
                <div className="product-icons">
                  {isInWishlist ? (
                    <IoMdHeart
                      className="icon heart-icon active"
                      title="Remove from Wishlist"
                      onClick={() => toggleWishlist(product)}
                      style={{ color: "red", cursor: "pointer" }}
                    />
                  ) : (
                    <IoMdHeartEmpty
                      className="icon heart-icon"
                      title="Add to Wishlist"
                      onClick={() => toggleWishlist(product)}
                      style={{ cursor: "pointer" }}
                    />
                  )}

                  <IoEyeOutline
                    className="icon share-icon"
                    title="View Product"
                  />
                </div>

                <Link href={`/product/${product.id}`}>
                  <img
                    src={`/${product.image}`}
                    alt={product.title}
                    className="product-image cursor-pointer"
                  />
                </Link>

                <h3 className="product-title">
                  {product.title.length > 35
                    ? product.title.slice(0, 35) + "..."
                    : product.title}
                </h3>

                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <div className="product-price-and-cart">
                  <p className="product-price">
                    {product.oldPrice && (
                      <span className="old-price">${product.oldPrice}</span>
                    )}
                    ${product.price}
                  </p>
                  {/* ✅ إضافة المنتج للكارت */}
                  <IoCartOutline
                    fontSize={30}
                    className="cart-icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => addToCart(product)}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
