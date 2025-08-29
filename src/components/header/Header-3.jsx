import "./Header.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineBolt } from "react-icons/hi2";

const Header3 = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            <div className="nav-links">
              <div className="nav-item">
                <span>Home</span>
                <MdKeyboardArrowDown />
              </div>
              <div className="nav-item">
                <span>Shop</span>
                <MdKeyboardArrowDown />
              </div>
              <div className="nav-item">
                <span>Categories</span>
                <span className="nav-badge badge-sale">Sale</span>
                <MdKeyboardArrowDown />
              </div>
              <div className="nav-item">
                <span>Products</span>
                <span className="nav-badge badge-hot">Hot</span>
                <MdKeyboardArrowDown />
              </div>
              <div className="nav-item">
                <span>Top Deals</span>
                <MdKeyboardArrowDown />
              </div>
              <div className="nav-item">
                <span>Elements</span>
                <MdKeyboardArrowDown />
              </div>
            </div>
            <div className="super-discount">
              <i className="fa-solid fa-bolt" />
              <HiOutlineBolt fontSize={22} className="fa-solid fa-bolt"/>
              <span>Super Discount</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header3;
