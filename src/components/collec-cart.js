import React from "react";
import Style from "./collec-cart.module.css";

const CollecCart = props => {
  return (
    <div className={Style.collecCart}>
      <div className={Style.cartImage}>
        <img src={props.img} alt="my collection" />
      </div>
      <h4>CLASSIC</h4>
      <p className={Style.p}>Explore</p>
    </div>
  );
};
export default CollecCart;
