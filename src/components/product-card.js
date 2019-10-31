import React from "react";
import Style from "./product-card.module.css";
import Color from "./colors-display";

const ProductCard = props => {
  return (
    <div className={Style.productCard}>
      <p>{props.name}</p>
      <p>colors :</p>
      {/* create a color component */}
      <Color color={props.color1} />
      <Color color={props.color2} />
      <Color color={props.color3} />
      <Color color={props.color4} />

      <p>{props.price} $</p>
      <button className={Style.btnBuy}>SHOP IT</button>
      <div className={Style.container}>
        <img src={props.img} alt="this product" />
      </div>
    </div>
  );
};
export default ProductCard;
