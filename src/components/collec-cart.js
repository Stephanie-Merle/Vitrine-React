import React from "react";
import Style from "./collec-cart.module.css";

const CollecCart = props => {
  let myClass;
  if (props.img === "1") {
    myClass = Style.cartImage1;
  } else if (props.img === "2") {
    myClass = Style.cartImage2;
  } else if (props.img === "3") {
    myClass = Style.cartImage3;
  } else if (props.img === "4") {
    myClass = Style.cartImage4;
  } else if (props.img === "5") {
    myClass = Style.cartImage5;
  }

  return (
    <div className={Style.collecCart}>
      <div className={myClass}> </div>
      <h4>CLASSIC</h4>
      <p className={Style.p}>Explore</p>
    </div>
  );
};
export default CollecCart;
