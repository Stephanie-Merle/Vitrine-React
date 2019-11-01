import React from "react";
import Style from "./navbar.module.css";

const Navbar = props => {
  return (
    <header className={Style.header}>
      <h1 onClick={props.close}>TRENDY BAGS</h1>
      <nav>
        <svg
          onClick={props.edit}
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="54"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon>
          <line x1="3" y1="22" x2="21" y2="22"></line>
        </svg>
        <span>
          <ul>
            <li>
              <a href="#collection" onClick={props.close}>
                Collection
              </a>
            </li>
            <li>
              <a href="#products" onClick={props.close}>
                Products
              </a>
            </li>
            <li>
              <a href="#philo" onClick={props.close}>
                Philosophy
              </a>
            </li>
          </ul>
          <div className={Style.cart}>
            <div className={Style.count}>2</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#50250c"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="10" cy="20.5" r="1" />
              <circle cx="18" cy="20.5" r="1" />
              <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
            </svg>
          </div>
        </span>
      </nav>
      <svg
        id="hamburger"
        className={Style.hamburger}
        onClick={props.clicked}
        xmlns="http://www.w3.org/2000/svg"
        width="54"
        height="54"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
      <div id="myDrawer" className={Style.drawer}>
        <ul>
          <li>
            <a href="#collection">Collection</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#philo">Philosophy</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
