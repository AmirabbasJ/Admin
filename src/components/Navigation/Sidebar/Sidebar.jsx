import React from "react";
import classes from "./Sidebar.module.css";
import LineBreak from "../../UI/LineBreak/LineBreak";
import { getTextsOf } from "../../../Texts/Texts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import SidebarItems from "./SidebarItems/SidebarItems";
import { useState } from "react";
import ResizeButton from "../../UI/ResizeButton/ResizeButton";
const Sidebar = props => {
  const types = { provider: "Sidebar", type: "title" };
  const title = getTextsOf(types);
  const [state, setToggle] = useState({ fullSize: true });

  const toggleResizer = () => {
    setToggle(prevState => ({ fullSize: !prevState.fullSize }));
  };
  let sidebarTitle = null;

  if (state.fullSize)
    sidebarTitle = <p className={classes["Sidebar-title"]}>{title}</p>;

  return (
    <div className={classes.Sidebar}>
      <div>
        <a href="/" className={classes["Sidebar-header"]}>
          <FontAwesomeIcon icon={faChartBar} size="2x" />
          {sidebarTitle}
        </a>
      </div>

      <div className={classes["Sidebar-items"]}>
        <ul>
          <LineBreak types={[types.provider]} />
          <SidebarItems isFullSize={state.fullSize} />
        </ul>
        <ResizeButton clicked={toggleResizer} resizeToggle={state.fullSize} />
      </div>
    </div>
  );
};

export default Sidebar;
