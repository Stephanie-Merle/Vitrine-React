import React from "react";
import Welcome from "./welcome";
import Collection from "./collection";
import Products from "./products";
import Philosophy from "./philo";
import News from "./newsletter";

const First = props => {
  return (
    <>
      {/* welcome */}
      <Welcome />
      {/* collection */}
      <Collection />
      {/* products */}
      <Products />
      {/* philosophy */}
      <Philosophy />
      {/* newsletter */}
      <News />
    </>
  );
};
export default First;
