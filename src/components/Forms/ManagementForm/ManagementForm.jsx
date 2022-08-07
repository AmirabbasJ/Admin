import React, { Component } from "react";
import InputsWrapper from "../../../hoc/InputsWrapper/InputsWrapper";
import List from "../../UI/List/List";
import classes from "./ManagementForm.module.css";
import Wrapper from "../../../hoc/Wrapper";
import Container from "../../../hoc/Container/Container";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { deepCopy } from "../../../AuxilaryFunctions/AuxilaryFunctions";
import { getTextsOf } from "../../../Texts/Texts";
import { connect } from "react-redux";
import * as actionTypes from "../../../Store/Actions/Actions";
class ManagementForm extends Component {
  componentDidMount() {
    const types = { provider: "Management" };

    const { inputValues, listTitle, formSubmitTexts } = getTextsOf(types);
    this.setState({
      inputValues,
      listTitle,
      formSubmitTexts
    });
  }
  state = {
    inputValues: null,
    listTitle: null,
    formSubmitTexts: null,
    data: []
  };
  onDeleteButtonClick = () => {
    const { inputValues } = this.state;
    let newInputsData = deepCopy(inputValues);
    for (const id in newInputsData) {
      if (newInputsData[id].type !== "checkbox") {
        newInputsData[id].value = "";
      }
    }
    this.setState({ inputValues: newInputsData });
  };
  onSubmitHandler = () => {
    let tableData = deepCopy(this.state.inputValues);

    this.props.addTableItem(tableData);
  };
  onChangeHandler = (id, value) => {
    const { inputValues } = this.state;

    const newInputValues = deepCopy(inputValues);
    if (newInputValues[id].type === "checkbox") {
      newInputValues[id].inputConfigs.checked = value;
    } else newInputValues[id].value = value;

    this.setState({ inputValues: newInputValues });
  };
  render() {
    let { inputValues, formSubmitTexts } = this.state;
    const inputsData = [];
    let checkboxese = [];

    if (inputValues) {
      for (const id in inputValues) {
        const data = inputValues[id];
        const input = (
          <Input
            key={id}
            styleType="list"
            id={id}
            type={data.type}
            value={data.value}
            inputConfigs={data.inputConfigs}
            changeHandler={(id, value) => this.onChangeHandler(id, value)}
          />
        );
        if (data.type === "checkbox") {
          checkboxese.push(
            <div key={id} className={classes.input}>
              {input}
            </div>
          );
        } else inputsData.push(<Container key={id}>{input}</Container>);
      }
      formSubmitTexts = formSubmitTexts.map(btnData => {
        return (
          <Button
            key={btnData.text}
            color={btnData.color}
            type={btnData.type}
            click={event => {
              event.preventDefault();
              btnData.type === "textCleaner"
                ? this.onDeleteButtonClick()
                : this.onSubmitHandler();
            }}
          >
            {btnData.text}
          </Button>
        );
      });
    }
    return (
      <Wrapper>
        <InputsWrapper>{inputsData}</InputsWrapper>
        <List header={this.state.listTitle} data={checkboxese} />
        <div className={classes["Submit-buttons"]}>{formSubmitTexts}</div>
      </Wrapper>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addTableItem: tableData =>
      dispatch({ type: actionTypes.ADD_ITEMS_TO_TABLE, tableData })
  };
};
export default connect(null, mapDispatchToProps)(ManagementForm);
