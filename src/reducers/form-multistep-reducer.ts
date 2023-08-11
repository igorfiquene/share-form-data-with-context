const initialStateFormMultiStep = {
  name: "",
  email: "",
  password: "",
  terms: false,
};

const ReducerFormMultiStep = (state, action) => {
  switch (action.type) {
    case "update_value":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "update_when_change_form":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export { ReducerFormMultiStep, initialStateFormMultiStep };
