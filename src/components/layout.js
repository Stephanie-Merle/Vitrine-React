import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Drawer from "./drawer";
import First from "./first-page";
import Edit from "./edit-database";

const Layout = () => {
  const [showDrawer, setDrawer] = useState(false);
  const [showEdit, setEdit] = useState(false);
  const [counter, setCount] = useState(0);

  const hamburgerHandler = () => {
    let visibility = showDrawer;
    setDrawer(!visibility);
  };

  const editHandler = () => {
    let visibility = showEdit;
    setEdit(!visibility);
    setDrawer(false);
  };
  const closeEdit = () => {
    setEdit(false);
  };
  const closeDrawer = () => {
    setDrawer(false);
  };

  const closeAll = () => {
    setEdit(false);
    setDrawer(false);
  };

  const incrementCounter = () => {
    setCount(counter + 1);
  };

  let page = <First close={closeDrawer} count={incrementCounter} />;
  if (showEdit) {
    page = <Edit />;
  }
  return (
    <div>
      <Navbar
        clicked={hamburgerHandler}
        edit={editHandler}
        head={closeAll}
        close={closeEdit}
        counter={counter}
      />
      <Drawer open={showDrawer} close={closeAll} />
      {page}
      {/* footer  */}
      <Footer />
    </div>
  );
};

export default Layout;
