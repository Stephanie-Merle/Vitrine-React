import React from "react";
import "./reset.css";
import Layout from "./components/layout";
import Welcome from "./components/welcome";
import Collection from "./components/collection";
import Products from "./components/products";
import Philosophy from "./components/philo";
import News from "./components/newsletter";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
