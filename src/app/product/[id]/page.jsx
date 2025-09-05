"use client";

import { useParams } from "next/navigation";
import { products } from "../../../productsData";
import Link from "next/link";
import {
  FaStar,
  FaRegHeart,
  FaBalanceScale,
  FaPlus,
  FaShippingFast,
} from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { IoShieldHalfOutline } from "react-icons/io5";
import { BsFillDatabaseFill } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { RxShare1 } from "react-icons/rx";
import { IoEyeOutline } from "react-icons/io5";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

import { useState } from "react";
import "./ProductDetails.css";
import ProductsPage from "../../../components/slideProduct/Product";
import NewsLetter from "../../../components/new_letter/NewsLetter";
import Footer from "../../../components/footer/Footer";
import Header1 from "../../../components/header/Header-1";
import Header2 from "../../../components/header/Header-2";
import Header3 from "../../../components/header/Header-3";

export default function ProductDetails() {
  const params = useParams();
  const { id } = params;
  const product = products.find((p) => p.id === Number(id));

  const [mainImage, setMainImage] = useState(
    product ? `/${product.image}` : ""
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="not-found">
        <h2>  The Product Not Found ⚠️ </h2>
        <Link href="/" className="back-home">
          Go Back Home Page
        </Link>
      </div>
    );
  }

  return (
  <>
      <Header1/>
      <Header2/>
      <Header3/>
      <div className="product-page">
        {/* صور المنتج */}
        <div className="product-images">
          <div className="thumbnail-list">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={`/${product.image}`}
                alt={product.title}
                className={`thumbnail ${
                  mainImage === `/${product.image}` ? "active" : ""
                }`}
                onClick={() => setMainImage(`/${product.image}`)}
              />
            ))}
          </div>
    
          <div className="main-image-wrapper">
            <img src={mainImage} alt={product.title} className="main-image" />
          </div>
    
        </div>
    
        
    
        {/* تفاصيل المنتج */}
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
    
          {/* Rating + Price + Review */}
          <div className="rating-price">
            <div className="product-price">
              <span className="new-price">${product.price}</span>
            </div>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star" />
              ))}
              <span className="reviews">(1 review)</span>
            </div>
          </div>
    
          <ul className="description-list">
            <li>
              Tourniquet Made Of Strong Elastic Strap With A Simple Plastic Lock.
            </li>
            <li>One Hand Can Implement The Hemostatic Device.</li>
            <li>Light Weight, sleek, classy, solid.</li>
          </ul>
    
          {/* أزرار الكمية + إضافة للعربة */}
          <div className="cart-quantity-wrapper">
            <div className="quantity-control">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                <FaMinus />
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>
                <FaPlus />
              </button>
            </div>
            <button className="add-to-cart">
              <IoCartOutline size={20} /> Add To Cart
            </button>
          </div>
    
          {/* زر الشراء الآن */}
          <button className="buy-now">Buy Now</button>
    
          {/* أيقونات إضافية */}
          <div className="product-actions">
            <span>
              <FaBalanceScale /> Compare
            </span>
            <span>
              <FaRegHeart /> Wishlist
            </span>
            <span>
              <RxQuestionMarkCircled /> Ask Us
            </span>
            <span>
              <RxShare1 /> Share
            </span>
          </div>
    
          {/* معلومات التوصيل والضمان */}
          <div className="extra-info">
            <p className="eye">
              <IoEyeOutline />{" "}
              <b style={{ color: "black" }}>27</b> people are viewing this right
              now{" "}
            </p>
            <p className="mark">
              <IoShieldCheckmarkSharp /> Estimated Delivery: Up to 4 business days
            </p>
            <p className="mark">
              <IoShieldCheckmarkSharp /> Free Shipping & Returns: On all orders
              over $200
            </p>
          </div>
    
          {/* طرق الدفع */}
          <div className="payment-info">
            <p>Guaranteed Safe And Secure Checkout</p>
            <img src="/img/visa.png" alt="Payments" />
          </div>
        </div>
    
      </div>
        <ProductsPage/>
        <NewsLetter/>
        <Footer/>
  </>
  );
}
