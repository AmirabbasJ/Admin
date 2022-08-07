import React from "react";
import classes from "./LineBreak.module.css";
const lineBreak = props => {
  let lineBreakClasses = [classes.LineBreak];
  const { types } = props;
  if (types) {
    
    types.forEach(lineClass=>{        
        lineBreakClasses.push(classes[lineClass])
    })
    
  }

  return <div className={lineBreakClasses.join(" ")} style={props.styles}></div>;
};

export default lineBreak;
