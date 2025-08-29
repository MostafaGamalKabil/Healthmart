import React from "react";
import "./Support.css";


const categories = [
  { title: "Free Shipping", desc:"On order over $100" ,  img: "/img/features1.png" },
  { title: "Flexible & Easy Return", desc:"Return within 14 days" , img: "/img/features2.png" },
  { title: "24/7 Support Services", desc:"Any Time Customers Support" ,    img: "/img/features3.png" },
  { title: "Secure Payment",  desc:"100% Fast & Secure Payment" , img: "/img/features4.png" },

];

const Support = () => {
  return (
    <section className="features">
      <div className="container">
      {categories.map((item , index) => {
        return( 
        <div className="feature_item" key={index}>
          <img src={item.img} alt="" />
          <div className="text">
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        </div>)
      })}
      </div>
    </section>
  );
};

export default Support;
