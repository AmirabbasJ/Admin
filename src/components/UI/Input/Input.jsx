import React from "react";
import classes from "./Input.module.css";
import Badge from "../Badge/Badge";
import Wrapper from "../../../hoc/Wrapper";
const Input = props => {
  let [inputElement, iconElement, labelElement] = Array(3).fill(null);

  const { inputConfigs, type, value, changeHandler, id, styleType } = props;
  if(!inputConfigs){
    return null
  }
  const { icon, direction, title, iconDirection, name } = inputConfigs;

  const customInputClasses = {
    input: [classes.Input, classes[direction || "rtl"]],
    inputContainer: [classes["Input-container"]],
    inputWrapper: [
      classes["Input-Wrapper"],
      classes[iconDirection || "left"],
      classes[styleType]
    ]
  };

  if (icon) {
    iconElement = (
      <div className={classes.prepent}>
        <p>{icon}</p>
      </div>
    );
    customInputClasses.input.push(classes.withIcon);
  }

  switch (type) {
    case "radio":
      labelElement = (
        <label className={classes.Title} style={{ width: "100%" }}>
          <Badge type={"modal"}>3</Badge>
          {title}
        </label>
      );
      inputElement = (
        <input
          type={type}
          className={classes.Radio}
          value={value}
          name={name}
          onChange={inp => changeHandler(id, inp.currentTarget.value)}
        />
      );

      break;
    case "select":
      const {selectTitle,selectOptions} = title
      let options = null
      if(selectOptions){
        options = selectOptions.map(option => {
          return <option key={option}>{option}</option>;
        })
      }
      labelElement = (
        <label className={classes.Title}>{selectTitle}</label>
      );
      inputElement = (
        <select
          name="select"
          className={customInputClasses.input.join(" ")}
          style={{ width: "auto" }}
          onChange={inp => changeHandler(id, inp.target.value)}
          value={value}
        >
          {options}
        </select>
      );
      break;
    case "checkbox":
      const { checked } = inputConfigs;
      inputElement = (
        <div className={classes.checkbox}>
          <label className={classes.Title}>
            <p>{title}</p>
          </label>
          <label className={classes.switch} >
            <input
              onChange={inp => changeHandler(id, inp.target.checked)}
              value={value}
              checked={checked}
              type={type}
              className={classes.Toggle}
              id={id}
            />
            <div className={classes.slider}></div>
          </label>
        </div>
      );

      break;
    case "textarea":
      labelElement = <label className={classes.Title}>{title}</label>;
      inputElement = (
        <textarea
          className={customInputClasses.input.join(" ")}
          value={value}
          onChange={inp => changeHandler(id, inp.target.value)}
        />
      );
      break;
    case "file":
      inputElement = (
        <label htmlFor={id} className={classes["file-container"]}>
          <p className={classes["File-title"]}>{title}</p>
          <p className={classes["File-title"]}>{value}</p>

          <input
            type={type}
            className={classes.File}
            value={value}
            name={id}
            id={id}
            onChange={inp => changeHandler(id, inp.target.value)}
          />
        </label>
      );
      break;
    case "text":
    case "number":
    case "email":
    default:
      const { placeholder, disabled } = inputConfigs;
      

      labelElement = <label className={classes.Title}>{title}</label>;
      inputElement = (
        <input
          onChange={inp => changeHandler(id, inp.target.value)}
          value={value}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          className={customInputClasses.input.join(" ")}
        />
      );
      break;
  }
  return (
    <Wrapper>
      {labelElement}
      <div className={customInputClasses.inputWrapper.join(" ")}>
        {iconElement}
        {inputElement}
      </div>
    </Wrapper>
  );
};

export default Input;
