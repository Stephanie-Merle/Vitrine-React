import React from "react";
import Style from "./colors-display.module.css";

const Color = props => {
  let myClass;

  if (props.color === "1") {
    myClass = [Style.colors, Style.brown].join(" ");
  } else if (props.color === "2") {
    myClass = [Style.colors, Style.black].join(" ");
  } else if (props.color === "3") {
    myClass = [Style.colors, Style.lightpink].join(" ");
  } else if (props.color === "4") {
    myClass = [Style.colors, Style.green].join(" ");
  } else if (props.color === "5") {
    myClass = [Style.colors, Style.orange].join(" ");
  } else if (props.color === "6") {
    myClass = [Style.colors, Style.darkred].join(" ");
  } else {
    myClass = Style.colors;
  }

  return <div className={myClass}></div>;
};
export default Color;
