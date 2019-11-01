import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Drawer from "./drawer";
import First from "./first-page";
import Edit from "./edit-database";

class Layout extends Component {
  state = {
    showDrawer: false,
    showEdit: false
  };
  hamburgerHandler = () => {
    let visibility = this.state.showDrawer;
    this.setState({ showDrawer: !visibility });
  };

  editHandler = () => {
    let visibility = this.state.showEdit;
    this.setState({ showEdit: !visibility });
  };
  closeEdit = () => {
    this.setState({ showEdit: false });
  };

  render() {
    let page = <First />;
    if (this.state.showEdit) {
      page = <Edit />;
    }
    return (
      <div>
        <Navbar
          clicked={this.hamburgerHandler}
          edit={this.editHandler}
          close={this.closeEdit}
        />
        <Drawer open={this.state.showDrawer} />
        {page}
        {/* footer  */}
        <Footer />
      </div>
    );
  }
}
export default Layout;
