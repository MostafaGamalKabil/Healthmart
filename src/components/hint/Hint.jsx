import React from "react";
import "./Hint.css";

const products = [
  {
    id: 1,
    title: "Skin Therapy",
    desc: "Transforming Skin Health with Expert Care",
    price: "$249.99",
    img: "img/hint3.png",
    bg: "#fde7d9"
  },
  {
    id: 2,
    title: "Vitamin B12",
    desc: "Boost Energy and Vitality with B12 Care",
    price: "$359.99",
    img: "img/hint2.png",
    bg: "#d9f1fd"
  },
  {
    id: 3,
    title: "Women Care",
    desc: "Comfort and Protection with Every Pad",
    price: "$179.99",
    img: "img/hint1.png",
    bg: "#d9fdee"
  }
];

const Hint = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="cards-wrapper">
          {products.map((item) => (
            <div
              className="card"
              key={item.id}
              style={{ backgroundColor: item.bg }}
            >
              <div className="details">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="price-div">
                  <span>from</span>
                  <button>{item.price}</button>
                </div>
              </div>
              <img src={item.img} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hint;
