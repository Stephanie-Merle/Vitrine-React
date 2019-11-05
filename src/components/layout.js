import React, { useState } from "react";
import { BasketProvider } from "./context/basket-context";
import Navbar from "./navbar";
import Footer from "./footer";
import Drawer from "./drawer";
import First from "./first-page";
import Edit from "./edit-database";

const Layout = () => {
  // const [inputState, setInputState] = useState(default state) is array destructuring form of:
  // const inputState = useState(default state)

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

  let page = (
    <BasketProvider
      value={{
        update: () => {
          setCount(counter + 1);
        }
      }}
    >
      <First close={closeDrawer} />
    </BasketProvider>
  );
  if (showEdit) {
    page = <Edit />;
  }
  return (
    <div>
      <BasketProvider value={{ data: counter }}>
        <Navbar
          clicked={hamburgerHandler}
          edit={editHandler}
          head={closeAll}
          close={closeEdit}
        />
      </BasketProvider>
      <Drawer open={showDrawer} close={closeAll} />
      {page}
      {/* footer  */}
      <Footer />
    </div>
  );
};

export default Layout;
