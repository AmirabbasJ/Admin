import React from "react";
import classes from "./List.module.css";
import LineBreak from "../LineBreak/LineBreak";
const List = props => {
  const {data} = props
  let ListItems = null
  if(data.length !== 0){
    ListItems = data.reduce((prev,curr,index)=>[prev,<LineBreak key={index} styles={{margin:"1.5rem 0"}}/>,curr])
  }
  return (
    <div className={classes["List-container"]}>
      <div className={classes.List}>
  <div className={classes["List-header"]}>{props.header}</div>
        <div className={classes["List-body"]}>{ListItems}</div>
      </div>
    </div>
  );
};

export default List;
