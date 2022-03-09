import { CHANGE_CHECK_BOX } from "./actions.js" 

const initialState = {
    checked: false,
}
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CHECK_BOX: {
      return {
        ...state,
        checked: !state.checked,
      };
    }
    default:
      return state;
  };
};
