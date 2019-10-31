import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Drawer from "./drawer";

class Layout extends Component {
  state = {
    showDrawer: false
  };
  hamburgerHandler = () => {
    let visibility = this.state.showDrawer;
    this.setState({ showDrawer: !visibility });
    console.log("clicked");
  };
  render() {
    return (
      <div>
        {/* bar de navigation with showDrawer state */}
        <Navbar clicked={this.hamburgerHandler} />
        <Drawer open={this.state.showDrawer} />

        {this.props.children}
        {/* footer  */}
        <Footer />
      </div>
    );
  }
}
export default Layout;
