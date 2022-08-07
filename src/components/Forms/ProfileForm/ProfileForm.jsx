import React, { Component } from "react";
import classes from "./ProfileForm.module.css";
import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { getTextsOf } from "../../../Texts/Texts";
import { deepCopy } from "../../../AuxilaryFunctions/AuxilaryFunctions";
import Container from "../../../hoc/Container/Container";
import InputsWrapper from "../../../hoc/InputsWrapper/InputsWrapper";

class ProfileForm extends Component {
  componentDidMount() {
    const types = { provider: "Profile" };
    const { inputValues, title, buttonsTexts } = getTextsOf(types);

    this.setState({ title, inputsData: { inputValues, buttonsTexts } });
  }

  state = {
    title: null,
    inputsData: null
  };

  onDeleteButtonClick = () => {
    const { inputsData } = this.state;
    const inputValues = deepCopy(inputsData.inputValues);
    for (const data in inputValues) {
      inputValues[data].value = "";
    }

    this.setState({ inputsData: { ...inputsData, inputValues } });
  };
  onSubmitHandler = () => {
    const { inputValues } = this.state.inputsData;
    const values = {};
    for (const title in inputValues) {
      values[title] = inputValues[title].value;
    }
  };

  onChangeHandler = (id, value) => {
    const { inputValues } = this.state.inputsData;
    const newInputValues = { ...inputValues };
    newInputValues[id].value = value;
    this.setState({ inputValues: newInputValues });
  };
  render() {
    let oldInputsValues = null;
    let buttons = null;

    const inputsValues = [];
    const inputsData = deepCopy(this.state.inputsData);

    if (inputsData) {
      oldInputsValues = inputsData.inputValues;

      for (const id in oldInputsValues) {
        const data = oldInputsValues[id];

        inputsValues.push(
          <Container key={id}>
            <Input
              type={data.type}
              value={data.value}
              id={id}
              inputConfigs={data.inputConfigs}
              changeHandler={(id, value) => this.onChangeHandler(id, value)}
            />
          </Container>
        );
      }
      buttons = inputsData.buttonsTexts.map(textData => {
        return (
          <Button
            key={textData.text}
            color={textData.color}
            type={textData.type}
            click={event => {
              event.preventDefault();

              textData.type === "textCleaner"
                ? this.onDeleteButtonClick()
                : this.onSubmitHandler();
            }}
          >
            {textData.text}
          </Button>
        );
      });
    }

    return (
      <Card header={this.state.title}>
        <form action="/">
          <InputsWrapper>{inputsValues}</InputsWrapper>
          <div className={classes.Buttons}>{buttons}</div>
        </form>
      </Card>
    );
  }
}
export default ProfileForm;
