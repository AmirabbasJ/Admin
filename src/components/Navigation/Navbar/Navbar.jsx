import React from "react";
import classes from "./Navbar.module.css";
import UserProfile from "../UserProfile/UserProfile";
import LineBreak from "../../UI/LineBreak/LineBreak";
import { faEnvelope, faBell } from "@fortawesome/free-solid-svg-icons";
import NavIcon from "./NavIcon/NavIcon";

const navbar = () => {
  return (
    <div className={classes.Navbar}>
      <UserProfile />
      <LineBreak types={["Vertical"]} />
      <div className={classes.Icons}>
        <NavIcon icon={faBell}>3+</NavIcon>
        <NavIcon icon={faEnvelope}>7</NavIcon>
      </div>
    </div>
  );
};

export default navbar;
