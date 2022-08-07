import React from "react";
import classes from "./SidebarItems.module.css";
import { getTextsOf } from "../../../../Texts/Texts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LineBreak from "../../../UI/LineBreak/LineBreak";
import { NavLink } from "react-router-dom";
const sidebarItems = props => {
  const types = { provider: "Sidebar", type: "items" };
  const { itemsId, itemsName ,itemsIcon} = getTextsOf(types);
  
  
  const sidebarItemClasses = [classes["Sidebar-item"]];

  const items = itemsName.map((text, index) => {
    const itemId = itemsId[index];

    let texts = (
      <div className={classes["Sidebar-item-text"]}>
        <p>{text}</p>
      </div>
    );

    if (!props.isFullSize) {
      sidebarItemClasses.push(classes.smallSize);
      texts = null;
    }
    return (
      <li key={index}>
        <NavLink
          to={"/" + itemId}
          className={sidebarItemClasses.join("  ")}
          activeClassName={classes.active}
        >
          <div className={classes["Sidebar-item-icon"]}>
            <FontAwesomeIcon icon={itemsIcon[itemId]} size="sm" />
          </div>
          {texts}
        </NavLink>

        <LineBreak types={[types.provider]} />
      </li>
    );
  });
  return items;
};

export default sidebarItems;
