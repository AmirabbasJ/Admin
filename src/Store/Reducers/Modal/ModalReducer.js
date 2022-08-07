import * as actionTypes from "../../Actions/Actions";
import stateUpdater from "../../StateUpdater";
const intialState = {
  showModal: false,
  name: null,
  selectedEvent: null

};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.HIDE_MODAL:
      return stateUpdater(state, {
        showModal: false,
       
      });

    case actionTypes.SHOW_MODAL:
      return stateUpdater(state, {
        showModal: true
      
      });
      case actionTypes.SET_MODAL_TITLE:
        
        return stateUpdater(state,{
          selectedEvent: action.selectedEvent,
          name: action.name

          
        })
    default:
      return state;
  }
};

export default reducer;
