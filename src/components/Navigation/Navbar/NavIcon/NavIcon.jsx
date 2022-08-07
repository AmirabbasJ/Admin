import React from "react";
import classes from "./NavIcon.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "../../../UI/Badge/Badge";
const NavIcon = (props) => {
  return (
    <div className={classes.Icon}>
      <Badge>
      {props.children}
      </Badge>
      <FontAwesomeIcon icon={props.icon} />
    </div>
  );
};

export default NavIcon;
