import React from "react";
import Style from "./products.module.css";
import ProductCard from "./product-card";

const Products = () => {
  return (
    <section id="products" className={Style.products}>
      <div className={Style.sticker} id="sticker">
        Summer collection
      </div>
      <button className={Style.btnCollec} href="#products">
        Products
      </button>

      <container className={Style.productList}>
        {/* to transform in component */}
        <ProductCard img="1" price="18.00" />
        <ProductCard img="2" price="18.00" />
        <ProductCard img="3" price="18.00" />
        <ProductCard img="4" price="18.00" />

        <button className={Style.btnBrowse}>BROWSE ALL PRODUCTS</button>
      </container>
    </section>
  );
};
export default Products;
