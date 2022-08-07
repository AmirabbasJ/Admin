import React from "react";
import classes from "./ContentWrapper.module.css";

const ContentWrapper = props => {
  return <div className={classes.Contents}>{props.children}</div>;
};

export default ContentWrapper;
