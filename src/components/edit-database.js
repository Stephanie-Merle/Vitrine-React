import React from "react";
import Style from "./edit-database.module.css";

const Edit = props => {
  return (
    <div className={Style.display}>
      <div className={Style.form}>HERE DISPLAY FOR THE READ REQUESTS</div>
      <div className={Style.form}>
        <p>choice dropmenu : create / read / update / delete </p>

        <select name="Action">
          <option value="create">CREATE</option>
          <option value="read">READ</option>
          <option value="update">UPDATE</option>
          <option value="delete">DELETE</option>
        </select>

        <input type="text" placeholder="ID" />
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
};
export default Edit;
