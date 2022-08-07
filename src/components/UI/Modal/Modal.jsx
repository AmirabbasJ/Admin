import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import { connect } from "react-redux";
import * as actionTypes from "../../../Store/Actions/Actions";
import { useEffect } from "react";

const Modal = props => {
  const modalClasses = [classes.Modal];

  useEffect(() => {
    if (props.showModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  });
  if (!props.showModal) {
    modalClasses.push(classes.Hide);
  }
  return (
    <Backdrop show={props.showModal} clicked={props.changeShowModalState}>
      <div
        className={modalClasses.join(" ")}
        onClick={event => event.stopPropagation()}
      >
        <div className={classes.Close} onClick={props.changeShowModalState}>
          &#10005;
        </div>

        <div className={classes.Body}>{props.children}</div>
      </div>
    </Backdrop>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    changeShowModalState: () => dispatch({ type: actionTypes.HIDE_MODAL })
  };
};

const mapStateToProps = state => {
  return {
    showModal: state.modal.showModal
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
