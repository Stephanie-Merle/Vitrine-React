import React from "react";
import Style from "./drawer.module.css";

const Drawer = props => {
  let mode;
  if (props.open) {
    mode = [Style.drawer, Style.open].join(" ");
  } else {
    mode = [Style.drawer, Style.close].join(" ");
  }

  return (
    <div id="myDrawer" className={mode}>
      <ul>
        <li>
          <a onClick={props.close} href="#collection">
            Collection
          </a>
        </li>
        <li>
          <a onClick={props.close} href="#products">
            Products
          </a>
        </li>
        <li>
          <a onClick={props.close} href="#philo">
            Philosophy
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
