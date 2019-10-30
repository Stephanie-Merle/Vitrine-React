import React from "react";
import Style from "./product-card.module.css";

const ProductCard = props => {
  let myClass;
  if (props.img === "1") {
    myClass = Style.product1;
  } else if (props.img === "2") {
    myClass = Style.product2;
  } else if (props.img === "3") {
    myClass = Style.product3;
  } else if (props.img === "4") {
    myClass = Style.product4;
  } else if (props.img === "5") {
    myClass = Style.product5;
  }
  return (
    <div className={Style.productCard}>
      <p>Ginger</p>
      <p>colors :</p>
      <div className={Style.colors}></div>
      <div className={Style.colors}></div>
      <div className={Style.colors}></div>
      <div className={Style.colors}></div>
      <p>{props.price} $</p>
      <button className={Style.btnBuy}>SHOP IT</button>
      <div className={myClass}></div>
    </div>
  );
};
export default ProductCard;
