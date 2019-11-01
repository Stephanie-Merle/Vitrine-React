import React from "react";
import Style from "./welcome.module.css";

const Welcome = props => {
  return (
    <section className={Style.welcome} onClick={props.close}>
      <p>Discover our bag collection</p>
    </section>
  );
};

export default Welcome;
