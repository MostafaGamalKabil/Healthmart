"use client";

import Header1 from "../../components/header/Header-1";
import Header2 from "../../components/header/Header-2";
import Header3 from "../../components/header/Header-3";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";
import "./myAccount.css";
import NewsLetter from "../../components/new_letter/NewsLetter";
import Footer from "../../components/footer/Footer";

const MyAccount = () => {
  return (
<>
      <Header1/>
      <Header2/>
      <Header3/>

      <div className="title-account">
        <small>Home / My account</small>
        <h4>My account</h4>
      </div>
      <div className="my-account-container">
        <div className="form-wrapper">
          <Login />
          <Register />
        </div>
      </div>

      <NewsLetter/>
      <Footer/>
</>
  );
};

export default MyAccount;
