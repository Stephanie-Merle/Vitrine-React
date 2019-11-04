import React, { Component } from "react";
import Style from "./edit-database.module.css";
const axios = require("axios");

class Edit extends Component {
  state = {
    products: [],
    categories: [],
    showCat: false
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/product/")
      .then(res => {
        const fetchedProducts = [];
        for (let key in res.data) {
          fetchedProducts.push({ ...res.data[key], id: key });
        }
        this.setState({ products: fetchedProducts });
      })
      .catch(err => {
        console.log(err.message);
      });
    axios
      .get("http://localhost:3000/category/")
      .then(res => {
        const arr = [];
        const list = res.data;
        Object.keys(list).map(catKey => {
          arr.push(list[catKey]);
        });

        console.log(arr);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  // readCategories() {
  //   axios
  //     .get("http://localhost:3000/category/")
  //     .then(res => {
  //       const arr = [];
  //       const list = res.data;
  //       Object.keys(list).map(catKey => {
  //         arr.push(list[catKey]);
  //       });
  //       // this.setState({ categories: arr });
  //       console.log(arr);
  //     })
  //     .catch(err => {
  //       console.log(err.message);
  //     });
  // }
  render() {
    // const Display;
    // Display = (
    //     Our products:
    //     {this.state.products.map(product => (
    //       <div className={Style.product}>
    //         <p>
    //           {product.title} : {product._id}
    //         </p>
    //         <p>Description : {product.description}</p>
    //         <p>Category : {product.category.title}</p>
    //         <p>Price : {product.price}</p>
    //       </div>
    //     ))}
    //   </div>
    // );
    // if (this.state.showCat) {
    const Display = (
      <div>
        Our Products:
        {this.state.products.map(product => (
          <div className={Style.product}>
            <p>
              {product.title} : {product._id}
            </p>
            <p>Category : {product.category.title}</p>
            <p>Price : {product.price}</p>
          </div>
        ))}
      </div>
    );

    return (
      <div className={Style.display}>
        <div className={Style.form}>{Display}</div>
        <div className={Style.form}>
          <div className={Style.menu}>
            <button>SEE ALL PRODUCTS</button>
            <button>SEE ALL CATEGORIES</button>
          </div>

          <select name="Action">
            <option value="create">CREATE</option>
            <option value="update">UPDATE</option>
            <option value="delete">DELETE</option>
          </select>
          <select name="selected">
            <option value="create">PRODUCT</option>
            <option value="read">CATEGORY</option>
          </select>
          <button onClick={this.getData}>SEND</button>
          <form action="http://localhost:3000/product/" method="post">
            <input type="text" placeholder="ID" />
          </form>
          <p>
            create dropMenu collection (name) / product (name, colors, price,
            picture)
          </p>
          <p>Read</p>
          <p>update (ID) </p>
          <p>delete (ID) </p>
        </div>
      </div>
    );
  }
}

export default Edit;
