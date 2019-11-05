import React from "react";
import Style from "./products.module.css";
import ProductCard from "./product-card";
import image1 from "../assets/collection/front/string-bag-brown.jpg";
import image2 from "../assets/collection/front/ring-bag-black.jpg";
import image3 from "../assets/collection/front/fancy-bag-pink.jpg";
import image4 from "../assets/collection/front/classic-bag-green.jpg";

const Products = props => {
  return (
    <div id="products" className={Style.products}>
      <div className={Style.sticker} id="sticker">
        Summer collection
      </div>
      <button className={Style.btnCollec} href="#products">
        Products
      </button>

      <div className={Style.productList}>
        {/* to transform in component */}

        <ProductCard
          name="Ginger"
          img={image1}
          price="18.00"
          color1="1"
          color2="3"
          color3="6"
          color4=""
        />
        <ProductCard
          name="Carole"
          img={image2}
          price="35.00"
          color1="2"
          color2=""
          color3=""
          color4=""
        />
        <ProductCard
          name="Emma"
          img={image3}
          price="26.00"
          color1="3"
          color2="1"
          color3=""
          color4=""
        />
        <ProductCard
          name="Olivia"
          img={image4}
          price="15.00"
          color1="4"
          color2="6"
          color3=""
          color4=""
        />

        <button className={Style.btnBrowse}>BROWSE ALL PRODUCTS</button>
      </div>
    </div>
  );
};
export default Products;
