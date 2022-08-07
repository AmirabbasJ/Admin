import React from "react";
import Card from "../UI/Card/Card";
import classes from "./AdminsUpdates.module.css";
import { getTextsOf } from "../../Texts/Texts";
import AdminsDropdown from "./AdminsDropdown/AdminsDropdown";
import Wrapper from "../../hoc/Wrapper";

const AdminsUpdates = () => {
  const types = { provider: "AdminsChanges" };
  const { names, message, title } = getTextsOf(types);

  return (
    <Wrapper>
      <Card header={title}>
        <p>
          <span className={classes.Highlighted}>{message.highlightedPart}</span>
          {" " + message.content}
        </p>
        <AdminsDropdown items={names} />
      </Card>
    </Wrapper>
  );
};

export default AdminsUpdates;
