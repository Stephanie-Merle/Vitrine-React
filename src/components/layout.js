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
    this.setState({ showDrawer: false });
  };
  closeEdit = () => {
    this.setState({ showEdit: false });
  };
  closeDrawer = () => {
    this.setState({ showDrawer: false });
  };

  render() {
    let page = <First close={this.closeDrawer} />;
    if (this.state.showEdit) {
      page = <Edit />;
    }
    return (
      <div>
        <Navbar
          clicked={this.hamburgerHandler}
          edit={this.editHandler}
          head={this.closeEdit}
          close={(this.closeEdit, this.closeDrawer)}
        />
        <Drawer open={this.state.showDrawer} close={this.closeEdit} />
        {page}
        {/* footer  */}
        <Footer />
      </div>
    );
  }
}
export default Layout;
