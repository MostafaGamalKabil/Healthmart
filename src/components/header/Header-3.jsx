import "./Header.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineBolt } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";

const Header3 = () => {
  return (
    <>
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
              <HiOutlineBolt fontSize={22} />
              <span>Super Discount</span>
            </div>
          </div>
        </div>
      </nav>

      {/* ✅ Search يظهر هنا في الموبايل */}
      <div className="mobile-search-bar">
        <div className="search-bar">
        
          <input
            type="text"
            placeholder="Search for products..."
            className="search-input"
          />
          <button className="search-button">
            <FiSearch fontSize={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header3;
