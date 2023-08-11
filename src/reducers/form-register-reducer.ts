const initialStateRegisterForm = {
  name: "",
  email: "",
  password: "",
  terms: false,
};

const ReducerRegisterForm = (state, action) => {
  switch (action.type) {
    case "update_value":
      return {
        ...state,
        [action.field]: action.payload,
      };

    case "reset":
      return {
        ...initialStateRegisterForm,
      };
    default:
      return state;
  }
};

export { ReducerRegisterForm, initialStateRegisterForm };
