import React, { Component } from "react";
import classes from "./StatisticForm.module.css";
import Button from "../../UI/Button/Button";
import { getTextsOf } from "../../../Texts/Texts";
import Input from "../../UI/Input/Input";
import { connect } from "react-redux";
import * as actionTypes from "../../../Store/Actions/Actions";
import { deepCopy } from "../../../AuxilaryFunctions/AuxilaryFunctions";
import Wrapper from "../../../hoc/Wrapper";
import Container from "../../../hoc/Container/Container";
import InputsWrapper from "../../../hoc/InputsWrapper/InputsWrapper";

class StatisticForm extends Component {
  componentDidMount() {
    const types = { provider: "Statistic" };
    const { inputValues, categories, formSubmitTexts } = getTextsOf(types);

    let newInputValues = inputValues.reduce((prev, next, index) => {
      if (next.type === "select") {
        const key = categories[index];
        const item = { [key]: next };
        return Object.assign(prev, item);
      } else return Object.assign(prev, next);
    }, {});

    this.formSubmitTexts = formSubmitTexts;
    this.setState({ inputValues: newInputValues });
  }
  formSubmitTexts = null;
  state = {
    inputValues: null
  };
  onChangeHandler = (id, value) => {
    const { inputValues } = this.state;
    const newInputsData = { ...inputValues };
    newInputsData[id].value = value;
    this.setState({ inputValues: newInputsData });
  };
  onSubmitHandler = () => {
    let tableData = deepCopy(this.state.inputValues);
    for (const id in tableData) {
      if (tableData[id].type === "file") delete tableData[id];
    }
    this.props.addTableItem(tableData);
  };
  render() {
    let submitBtns = null;
    const { inputValues } = this.state;
    const inputsData = [];
    if (inputValues) {
      submitBtns = this.formSubmitTexts.map(btnData => {
        return (
          <Button
            key={btnData.text}
            color={btnData.color}
            type={btnData.type}
            click={event => {
              event.preventDefault();
              this.onSubmitHandler();
            }}
          >
            {btnData.text}
          </Button>
        );
      });
      for (const id in inputValues) {
        const data = inputValues[id];
        if (data.type === "file") {
          submitBtns.push(
            <Input
              key={id}
              id={id}
              type={data.type}
              value={data.value}
              inputConfigs={data.inputConfigs}
              changeHandler={(id, value) => this.onChangeHandler(id, value)}
            />
          );
        } else
          inputsData.push(
            <Container key={id}>
              <Input
                id={id}
                type={data.type}
                value={data.value}
                inputConfigs={data.inputConfigs}
                changeHandler={(id, value) => this.onChangeHandler(id, value)}
              />
            </Container>
          );
      }
    }
    return (
      <Wrapper>
        <form action="/">
          <InputsWrapper>
            {inputsData}
            <div className={classes.Buttons}>{submitBtns}</div>
          </InputsWrapper>
        </form>
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

export default connect(null, mapDispatchToProps)(StatisticForm);
