import React from "react";
import classes from "./Backdrop.module.css";
const Backdrop = props =>{
    const backdropClasses = [classes.Backdrop]
   
    if(!props.show){
        backdropClasses.push(classes.Hidden)
    }

   return(
    <div onClick={()=>{props.clicked()}} className={backdropClasses.join(" ")}>
      {props.children}
    </div>
  )
}
export default Backdrop;
