import React from "react";
import classes from "./AdminsDropdownItem.module.css";
import { useState } from "react";
import { getTextsOf } from "../../../../Texts/Texts";
import { connect } from "react-redux";
import * as actionTypes from "../../../../Store/Actions/Actions";
const AdminsDropdownItem = props => {
  const [state, setDropdown] = useState({ showDropdown: false });

  const TextRequestTypes = { provider: "AdminsChanges", type: "events" };
  const eventsText = getTextsOf(TextRequestTypes);

  const eventsClasses = [classes.Events];

  if (props.selected && state.showDropdown) {
    eventsClasses.push(classes.Show);
  }

  let events = eventsText.map((event, index) => {
    return (
      <div
        key={index}
        className={classes.Event}
        onClick={() => {
          props.setModalTitle(props.name, event);
          props.showModal();
        }}
      >
        {event}
      </div>
    );
  });

  const setDrowpdown = name => {
    props.setDropdownStatus(name);
    if (props.selected)
      setDropdown(prevState => ({ showDropdown: !prevState.showDropdown }));
    else setDropdown({ showDropdown: true });
  };

  return (
    <div className={classes.Item}>
      <div className={classes.Title} onClick={() => setDrowpdown(props.name)}>
        {props.children}
      </div>

      <div className={eventsClasses.join(" ")}>{events}</div>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    showModal: () =>
      dispatch({
        type: actionTypes.SHOW_MODAL
      }),
    setModalTitle: (name, selectedEvent) => {
      dispatch({
        type: actionTypes.SET_MODAL_TITLE,
        name,
        selectedEvent
      });
    }
  };
};
export default connect(null, mapDispatchToProps)(AdminsDropdownItem);
