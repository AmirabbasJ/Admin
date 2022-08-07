import React from "react";
import classes from "./Dropdown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Wrapper from "../../../hoc/Wrapper";
const Dropdown = props => {
 
  let dropdownClasses = [classes.Dropdown];
  if (props.show) {
    dropdownClasses.push(classes.visible);
    document.onclick = () => {
      props.hideDropdown();
    };
  } else document.onclick = null;
  const dropdownElement = (
    <div className={dropdownClasses.join(" ")}>
      {props.dropdownItems.map(data => {
        let iconElement = null;
        const { icon, text, link } = data;
        if (icon) {
          iconElement = <FontAwesomeIcon icon={icon} />;
        }
        return (
          <Wrapper key={text}>
            <Link to={link} className={classes["Dropdown-item"]}>
              {iconElement}
              <p className={classes["Dropdown-title"]}>{text}</p>
            </Link>
          </Wrapper>
        );
      })}
    </div>
  );

  return dropdownElement;
};

export default Dropdown;
