import React, { Component } from "react";
import classes from "./ProductsInputs.module.css";
import Card from "../../components/UI/Card/Card";
import { getTextsOf } from "../../Texts/Texts";
import { deepCopy, getPageTitleOf } from "../../AuxilaryFunctions/AuxilaryFunctions";
import Input from "../../components/UI/Input/Input";
import Container from "../../hoc/Container/Container";
import ContentWrapper from "../../hoc/ContentWrapper/ContentWrapper";
import Button from "../../components/UI/Button/Button";
import Wrapper from "../../hoc/Wrapper";
import PageTile from "../../components/PageTile/PageTile";
class ProductsInputs extends Component {
  componentDidMount() {
    const types = { provider: "ProductsInputs" };
    const { inputValues, title, formSubmitTexts } = getTextsOf(types);
    const pageTitle = getPageTitleOf(types.provider)

    this.setState({ inputValues, title, formSubmitTexts,pageTitle });
  }
  state = {
    title: null,
    pageTitle:null,
    inputValues: null
  };
  onChangeHandler = (id, value) => {
    const { inputValues } = this.state;
    let newInputsData = deepCopy(inputValues);

    newInputsData = newInputsData.map(inputValue => {
      if (inputValue.hasOwnProperty(id)) {
        if (inputValue[id].type === "checkbox") {
          const isChecked = value;
          const { inputConfigs } = inputValue[id];
          const { dependency } = inputConfigs;
          const dependedData = inputValue[dependency];

          inputConfigs.checked = isChecked;
          dependedData.inputConfigs.disabled = isChecked;
          if (isChecked) {
            dependedData.value = "";
          }
        } else {
          inputValue[id].value = value;
        }
      }
      return inputValue;
    });

    this.setState({ inputValues: newInputsData });
  };
  onDeleteButtonClick = () => {
    const { inputValues } = this.state;
    let newInputsData = deepCopy(inputValues);
    newInputsData = newInputsData.map(inputValue => {
      for (const id in inputValue) {
        inputValue[id].value = "";
      }

      return inputValue;
    });

    this.setState({ inputValues: newInputsData });
  };
  onSubmitHandler = () => {
    const { inputValues } = this.state;

    inputValues.reduce((prev, next) => {
      return Object.assign(prev, next);
    }, {});
  };
  render() {
    let { inputValues, formSubmitTexts } = this.state;
    let inputGroups = [];

    if (inputValues) {
      

      inputValues.forEach(inputValue => {
        const inputs = [];
        for (const id in inputValue) {
          const data = inputValue[id];
          const inputData = (
            <Input
            key={id}
              type={data.type}
              value={data.value}
              id={id}
              inputConfigs={data.inputConfigs}
              changeHandler={(id, value) => this.onChangeHandler(id, value)}
            />
          );
          if (data.type === "checkbox") {
            const { dependency, checked } = data.inputConfigs;

            inputValue[dependency].inputConfigs.disabled = checked;
            inputs.push(inputData);
          } else inputs.push(<Container key={id}>{inputData}</Container>);
        }
        inputGroups.push(inputs);
      });
      
      inputGroups = inputGroups.map((inputGroup,index) => {

        return <div className={classes["Inputs-container"]} key={index}>{inputGroup}</div>;
      });

      formSubmitTexts = formSubmitTexts.map(btnData => {
        return (
          <div  key={btnData.text}>
            <Button
            
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
          </div>
        );
      });
    }

    return (
      <Wrapper>
        <PageTile>{this.state.pageTitle}</PageTile>
        <ContentWrapper>
          <Card header={this.state.title}>
            <form action="">
              <div className={classes["Input-wrapper"]}>{inputGroups}</div>
              <div className={classes["Submit-wrapper"]}>{formSubmitTexts}</div>
            </form>
          </Card>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default ProductsInputs;
