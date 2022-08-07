import React from "react";
import classes from "./Table.module.css";
import Button from "../Button/Button";
import { getTextsOf } from "../../../Texts/Texts";
import * as actionTypes from "../../../Store/Actions/Actions";
import { connect } from "react-redux";
import Wrapper from "../../../hoc/Wrapper";
import { deepCopy } from "../../../AuxilaryFunctions/AuxilaryFunctions";

const Table = props => {
  const types = { provider: "Table" };
  const { buttonsTexts } = getTextsOf(types);

  const setCurrentData = (itemData, index) => {
    props.showModal();
    props.setCurrentData(deepCopy(itemData), index);
  };
  const onDeleteTableClick = id => {
    props.removeTableItem(id);
  };

  let tableTitle = null;
  let tableBody = null;
  const { tableHead, currentTableType } = props;

  let tableData = props.tableData[currentTableType];

  if (tableData && tableData.length !== 0 && tableHead) {
    tableData = deepCopy(tableData);
    tableTitle = (
      <Wrapper>
        <th>#</th>
        {tableHead.map(cat => {
          return <th key={currentTableType + cat}>{cat}</th>;
        })}
        <th>حذف/ویرایش</th>
      </Wrapper>
    );
    tableBody = tableData.map((itemData, index) => {
      const checkboxes = [];
      let hasCheckbox = false;
      const itemsValues = Object.values(itemData).filter(curr => {
        const isCheckbox = curr.type === "checkbox";
        if (isCheckbox) {
          hasCheckbox = true;
          if (curr.inputConfigs.checked) {
            checkboxes.push(curr.value);
          }
        }
        return !isCheckbox;
      });

      if (hasCheckbox) {
        const checkboxesValues = checkboxes.join(" ,");
        itemsValues.push({ value: checkboxesValues });
      }
      return (
        <tr key={currentTableType + index}>
          <td>{index + 1}</td>
          {itemsValues.map((item, itemIndex) => {
            let value = item.value;
            if (item.type && item.inputConfigs.disabled) {
              value = "-";
            }
            return (
              <td key={value + itemIndex + index + currentTableType}>
                {value || "-"}
              </td>
            );
          })}
          <td>
            <div className={classes.Buttons}>
              {buttonsTexts.map(btnData => {
                return (
                  <Button
                    key={currentTableType + btnData.text + index}
                    type={btnData.type}
                    color={btnData.color}
                    click={() =>
                      btnData.type === "textCleaner"
                        ? onDeleteTableClick(index)
                        : setCurrentData(itemData, index)
                    }
                  >
                    {btnData.text}
                  </Button>
                );
              })}
            </div>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className={classes["Table-container"]}>
      <table className={classes.Table}>
        <thead className={classes["Table-head"]}>
          <tr>{tableTitle}</tr>
        </thead>
        <tbody className={classes["Table-body"]}>{tableBody}</tbody>
      </table>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    tableData: state.table.tableData,
    currentTableType: state.table.currenTableDataType
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeTableItem: id =>
      dispatch({ type: actionTypes.REMOVE_ITEMS_FROM_TABLE, id }),

    showModal: () => dispatch({ type: actionTypes.SHOW_MODAL }),

    setCurrentData: (currentData, index) =>
      dispatch({
        type: actionTypes.SET_TABLE_CURRENT_DATA,
        currentData,
        index
      })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Table);
