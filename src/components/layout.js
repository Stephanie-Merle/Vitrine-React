import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

class Layout extends Component {
  state = {
    showDrawer: false
  };
  render() {
    return (
      <div>
        {/* bar de navigation with showDrawer state */}
        <Navbar />
        {this.props.children}
        {/* footer  */}
        <Footer />
      </div>
    );
  }
}
export default Layout;
