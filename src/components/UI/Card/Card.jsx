import React from "react";
import classes from "./Card.module.css";
import LineBreak from "../LineBreak/LineBreak";

const card = props => {
  let footer = null
  
  if (props.footer){
    footer = (<div className={classes["Card-footer"]}>
            <LineBreak /> 
            <p>{props.footer}</p>
          </div>)
  }
  return (
    
    <div className={classes["Card-container"]}>
      <div className={classes.Card}>
        <div className={classes["Card-title"]}>
          <p>{props.header}</p>
        </div>

        <div className={classes["Card-body"]}>
          <div className={classes["Card-content"]}>
            {props.children}
          </div>
          {footer}
        </div>
      </div>
    </div>
  );
};

export default card;
