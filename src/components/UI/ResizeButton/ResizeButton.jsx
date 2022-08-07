import React from "react";
import classes from "./ResizeButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
const ResizeButton = (props) => {
  const resizerClasses = [classes.Resizer]
  if(props.resizeToggle){
    
    resizerClasses.push(classes.rotated)
  }
  return (
    <div className={classes["Resizer-container"]}>
        <button className={resizerClasses.join(" ")} onClick={props.clicked}>
          <FontAwesomeIcon icon={faAngleLeft} size="lg" />
        </button>
    </div>
  );
};

export default ResizeButton;
