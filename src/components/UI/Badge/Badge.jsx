import React from "react";
import classes from "./Badge.module.css";
const Badge = props => {
  const { type } = props;
  const badgeClasses = [classes.Badge];
  if (type) {
    badgeClasses.push(classes[type]);
  }
  return <div className={badgeClasses.join(" ")}>{props.children}</div>;
};

export default Badge;
