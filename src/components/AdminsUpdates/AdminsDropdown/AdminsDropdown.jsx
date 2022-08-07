import React from "react";
import classes from "./AdminsDropdown.module.css";
import AdminsDropdownItem from "./AdminsDropdownItem/AdminsDropdownItem";
import { useState } from "react";
const AdminsDropdown = props => {
  const [state, setName] = useState({ name: null });
  const setItemName = name => {
    setName({ name });
  };
  return (
    <div className={classes["Items-container"]}>
      {props.items.map(item => {
        
        
        let chosed = item === state.name;
        return (
          <AdminsDropdownItem
            key={item}
            name={item}
            setDropdownStatus={setItemName}
            selected={chosed}
           
          >
            <p>{item}</p>
          </AdminsDropdownItem>
          
        );
      })}
    </div>
  );
};

export default AdminsDropdown;
