import React from "react";
import classes from "./Button.module.css";
import { Link } from "react-router-dom";
const Button = props => {
  const { color } = props;
  const btnClasses = [classes.Button];
  if (color) {
    btnClasses.push(classes[color]);
  }
  const buttonProperties = {
    className: btnClasses.join(" "),
    onClick: props.click,
    style: props.styles
  };

  let button = <button {...buttonProperties}>{props.children}</button>;
  if (props.type === "submit") {
    button = (
      <input {...buttonProperties} type="submit" value={props.children} />
    );
  }
  if (props.type === "link") {
    button = (
      <Link {...buttonProperties} to={props.to}>
        {props.children}
      </Link>
    );
  }

  return <div className={classes["Button-container"]}>{button}</div>;
};

export default Button;
