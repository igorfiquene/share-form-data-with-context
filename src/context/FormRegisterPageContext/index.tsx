"use client";

import {
  initialStateRegisterForm,
  ReducerRegisterForm,
} from "@/reducers/form-register-reducer";
import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from "react";

export const FormRegisterPageContext = createContext({
  state: { ...initialStateRegisterForm },
  dispatch: () => null,
});

interface FormRegisterPageReducerTypes {
  children: ReactNode;
}

export const FormRegisterPageReducer = ({
  children,
}: FormRegisterPageReducerTypes) => {
  const [state, dispatch] = useReducer(
    ReducerRegisterForm,
    initialStateRegisterForm
  );

  const context = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <FormRegisterPageContext.Provider value={context}>
      {children}
    </FormRegisterPageContext.Provider>
  );
};

export const useFormRegisterPageContext = () =>
  useContext(FormRegisterPageContext);
