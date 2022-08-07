import React, { useState } from "react";
import profImage from "../../../assets/Avatar/Joker.jpg";
import classes from "./UserProfile.module.css";
import Dropdown from "../../UI/Dropdown/Dropdown";
import { getTextsOf } from "../../../Texts/Texts";

const UserProfile = () => {
  const types = { provider: "NavBar", type: "DropdownItems" };
  const DropdownItems = getTextsOf(types);
  const [state, setState] = useState({ showDropdown: false });

  const dropdownToggle = () => {
    setState(prevState => ({ showDropdown: !prevState.showDropdown }));
  };
  const hideDropdown = () => {
    setState({ howDropdown: false });
  };
  return (
    <div className={classes["Profile-container"]} onClick={dropdownToggle}>
      <div className={classes.Profile}>
        <p className={classes["profile-name"]}>اسد</p>
        <img className={classes.Image} src={profImage} alt="profile" />
      </div>

      <Dropdown
        show={state.showDropdown}
        hideDropdown={hideDropdown}
        dropdownItems={DropdownItems}
      />
    </div>
  );
};

export default UserProfile;
