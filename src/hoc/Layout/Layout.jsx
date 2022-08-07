import React, { Component } from "react";
import classes from "./Layout.module.css";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import Sidebar from "../../components/Navigation/Sidebar/Sidebar";
import ScrollToTopButton from "../../components/UI/ScrollToTopButton/ScrollToTopButton";
class Layout extends Component {
  render() {
    return (
      
      <div className={classes["Layout-wrapper"]}>

        <div className={classes["Main-contents"]}>
          <Navbar />
          
          <div className={classes.Content}>
         
            {this.props.children}
          </div>
       
        </div>
        
        <Sidebar />
        <ScrollToTopButton />
      </div>
        
     
    );
  }
}

export default Layout;
