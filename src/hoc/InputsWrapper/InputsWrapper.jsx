import React from "react";
import classes from "./InputsWrapper.module.css";

const InputsWrapper = props => {
  return <div className={classes.InputsWrapper}>{props.children}</div>;
};

export default InputsWrapper;
