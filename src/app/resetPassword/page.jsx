import NewsLetter from "../../components/new_letter/NewsLetter";
import Header1 from "../../components/header/Header-1";
import Header2 from "../../components/header/Header-2";
import Header3 from "../../components/header/Header-3";
import Footer from "../../components/footer/Footer";

import './resetPassword.css'
const ResetPassword = () => {
  return (
    <>
      <Header1 />
      <Header2 />
      <Header3 />

      <div className="title-account">
        <small>Home / My account</small>
        <h4>My account</h4>
      </div>

      <div className="reset-pass">
        <small>
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.
        </small>

        <form >
            <label htmlFor="">Username or email *</label>
            <input type="text" />
            <button>Reset Password</button>
        </form>
      </div>

      <NewsLetter/>
      <Footer/>
    </>
  );
};

export default ResetPassword;
