import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import "../node_modules/font-awesome/css/font-awesome.css";
import { createStore, combineReducers } from "redux";
import modalReducer from "./Store/Reducers/Modal/ModalReducer";
import tableReducer from "./Store/Reducers/Table/TableReducer";
import adminsChangesReducer from "./Store/Reducers/AdminsChanges/AdminsChangesReducer";

const reducer = combineReducers({
  table: tableReducer,
  modal: modalReducer,
  adminsChanges: adminsChangesReducer
});
const reduxExtension =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, reduxExtension);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
