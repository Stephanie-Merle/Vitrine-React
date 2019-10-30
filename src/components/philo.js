import React from "react";
import Style from "./philo.module.css";

const Philo = () => {
  return (
    <section id="philo" className={Style.philo}>
      <div>
        <p>We aim to provide the best quality of bags at a fair cost.</p>
        <p>Check out our new collection and order from us today.</p>
        <button className={Style.btnRead}>READ MORE</button>
      </div>
    </section>
  );
};
export default Philo;
