import * as actionTypes from "../../Actions/Actions";
import stateUpdater from "../../StateUpdater";
const intialState = {
  selectedAdminsChange: null
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_ADMINS_CHANGE:
      return stateUpdater(state, {
        selectedAdminsChange: action.adminsChangeName
      });

    default:
      return state;
  }
};

export default reducer;
