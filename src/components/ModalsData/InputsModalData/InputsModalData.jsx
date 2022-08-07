import React, { Component } from "react";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { connect } from "react-redux";
import classes from "./InputsModalData.module.css";
import { deepCopy } from "../../../AuxilaryFunctions/AuxilaryFunctions";
import * as actionTypes from "../../../Store/Actions/Actions";
class InputsModalData extends Component {
  
  onChangeHandler = (id, value) => {
    const newInputValues = deepCopy(this.props.currentData);
    if (newInputValues[id].type === "checkbox") {

      newInputValues[id].inputConfigs.checked = value;
    } else newInputValues[id].value = value;

    this.props.editCurrentData(newInputValues);
  };
  onSubmitHandler = event => {
    event.preventDefault();
    const { currentData } = this.props;
    const inputData = deepCopy(currentData);
    this.props.editTableData(inputData);
    this.props.hideModal();
  };
  render() {
    const inputValues = this.props.currentData;
    const { currentTableType } = this.props;

    const inputsData = [];
    if (inputValues) {
      for (const id in inputValues) {
        const data = inputValues[id];
        
        inputsData.push(
          <div className={classes["Modal-inputs"]} key={id + currentTableType}>
            <Input
              key={id + currentTableType}
              id={id}
              type={data.type}
              value={data.value}
              inputConfigs={data.inputConfigs|| {title:id}}
              changeHandler={(id, value) => this.onChangeHandler(id, value)}
            />
          </div>
        );
      }
    }
    return (
      <form action="/">
        <div className={classes.Form}>
          {inputsData}

          <Button color={"green"} type={"submit"} click={this.onSubmitHandler}>
            ثبت محصول جدید
          </Button>
        </div>
      </form>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
   
    hideModal: () => {
      dispatch({ type: actionTypes.HIDE_MODAL });
    },

    editCurrentData: newData =>
      dispatch({
        type: actionTypes.EDIT_TABLE_CURRENT_DATA,
        currentData: newData
      }),

    editTableData: currentData =>
      dispatch({
        type: actionTypes.EDIT_TABLE_DATA,
        currentData
      })
  };
};
const mapStateToProps = state => {
  return {
    
    currentData: state.table.currentTableData
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputsModalData);
