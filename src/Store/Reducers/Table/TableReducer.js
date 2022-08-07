import * as actionTypes from "../../Actions/Actions";
import stateUpdater from "../../StateUpdater";
import { deepCopy } from "../../../AuxilaryFunctions/AuxilaryFunctions";

const intialState = {
  tableData: {},
  currentTableData: null,
  currentTableDataIndex: null,
  currenTableDataType: null
};
const setTableType = (state, action) => {
  const currenTableDataType = action.tableType;
  return stateUpdater(state, {
    currenTableDataType
  });
};
const addItemsToTable = (state, action) => {
  const tableData = deepCopy(state.tableData);
  const { currenTableDataType } = state;
  if (tableData.hasOwnProperty(currenTableDataType)) {
    tableData[currenTableDataType].push(action.tableData);
  } else {
    tableData[currenTableDataType] = [];
    tableData[currenTableDataType].push(action.tableData);
  }
  return stateUpdater(state, {
    tableData
  });
};

const removeItemsFromTable = (state, action) => {
  const tableData = deepCopy(state.tableData);
  const { currenTableDataType } = state;
  tableData[currenTableDataType].splice(action.id, 1);
  return stateUpdater(state, {
    tableData
  });
};

const setTableCurrentData = (state, action) => {
  const currentTableData = action.currentData;
  const currentTableDataIndex = action.index;

  return stateUpdater(state, {
    currentTableData,
    currentTableDataIndex
  });
};
const editTableData = (state, action) => {
  const tableData = deepCopy(state.tableData);
  const { currenTableDataType, currentTableDataIndex: index } = state;
  const currentTableData = action.currentData;
  const tableDataList = tableData[currenTableDataType];
  tableDataList[index] = currentTableData;

  return stateUpdater(state, {
    tableData
  });
};

const editCurrentTableData = (state, action) => {
  const currentTableData = action.currentData;
  return stateUpdater(state, {
    currentTableData
  });
};

const setTableData = (state, action) => {
  const tableData = deepCopy(state.tableData);
  const { currenTableDataType } = state;
  tableData[currenTableDataType] = action.tableData;
  return stateUpdater(state, {
    tableData
  });
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TABLE_DATA:
      return setTableData(state, action);
    case actionTypes.ADD_ITEMS_TO_TABLE:
      return addItemsToTable(state, action);

    case actionTypes.REMOVE_ITEMS_FROM_TABLE:
      return removeItemsFromTable(state, action);

    case actionTypes.SET_TABLE_CURRENT_DATA:
      return setTableCurrentData(state, action);
    case actionTypes.EDIT_TABLE_DATA:
      return editTableData(state, action);
    case actionTypes.EDIT_TABLE_CURRENT_DATA:
      return editCurrentTableData(state, action);

    case actionTypes.SET_TABLE_TYPE:
      return setTableType(state, action);

    default:
      return state;
  }
};

export default reducer;
