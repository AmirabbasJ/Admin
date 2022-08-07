import React, { useState } from "react";
import classes from "./AdminsUpdatesModalData.module.css";
import { getTextsOf } from "../../../Texts/Texts";
import Button from "../../UI/Button/Button";
import LineBreak from "../../UI/LineBreak/LineBreak";
import Input from "../../UI/Input/Input";
import Wrapper from "../../../hoc/Wrapper";
import { connect } from "react-redux";
import { setTitle } from "../../../AuxilaryFunctions/AuxilaryFunctions";
import * as actionTypes from "../../../Store/Actions/Actions";
import Badge from "../../UI/Badge/Badge";

const AdminsUpdatesModalData = props => {
  const [state, setState] = useState({ selectedRadio: null });
  const onChangeHandler = value => {
    setState({ ...state, selectedRadio: value });
  };

  const types = { provider: "AdminsChanges", type: props.selectedEvent };

  const {
    radiosName,
    inputValues,

    buttonsTexts
  } = getTextsOf(types);
  const modalTitle = setTitle(props.selectedName, props.selectedEvent);

  const inputsData = [];

  if (inputValues) {
    for (const id in inputValues) {
      const data = inputValues[id];
      data.inputConfigs.name = radiosName;
      inputsData.push(
        <div className={classes["Radio-container"]} key={id}>
          <div style={{ display: "flex" }}>
            <Input
              type={data.type}
              value={data.value}
              id={id}
              inputConfigs={data.inputConfigs}
              changeHandler={value => onChangeHandler(id, value)}
            />
          </div>
          <LineBreak types={["list"]} styles={{ marginTop: 0 }} />
        </div>
      );
    }
  }
  let buttons = null;

  if (buttonsTexts) {
    buttons = buttonsTexts.map(btnData => {
      if (btnData.type === "link") {
        return (
          <div key={btnData.text}>
            <Button
              color={btnData.color}
              click={() => {
                props.hideModal();
                props.setSelectedAdminsChanges(btnData.text);
              }}
              to={"/admins-changes"}
              type={btnData.type}
            >
              <Badge type={"modal"}>3</Badge>
              {btnData.text}
            </Button>

            <LineBreak />
          </div>
        );
      } else
        return (
          <div key={btnData.text}>
            <Button
              color={btnData.color}
              click={event => {
                event.preventDefault();

              }}
              type={btnData.type}
            >
              {btnData.text}
            </Button>

            <LineBreak />
          </div>
        );
    });
  }

  return (
    <Wrapper>
      <div className={classes.Header}>
        <h3>{modalTitle}</h3>
      </div>

      <LineBreak types={["vertical"]} styles={{ marginTop: 0 }} />
      <div>
        <form action="/">
          <div className={classes.Inputs}>{inputsData}</div>

          {buttons}
        </form>
      </div>
    </Wrapper>
  );
};
const mapStateToProps = state => {
  return {
    selectedEvent: state.modal.selectedEvent,
    selectedName: state.modal.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => {
      dispatch({ type: actionTypes.HIDE_MODAL });
    },
    setSelectedAdminsChanges: adminsChangeName =>
      dispatch({
        type: actionTypes.SET_SELECTED_ADMINS_CHANGE,
        adminsChangeName
      })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminsUpdatesModalData);
