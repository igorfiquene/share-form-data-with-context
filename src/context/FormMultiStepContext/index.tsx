"use client";

import {
  ReducerFormMultiStep,
  initialStateFormMultiStep,
} from "@/reducers/form-multistep-reducer";
import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";

export const FormMultiStepContext = createContext({
  state: { ...initialStateFormMultiStep },
  dispatch: () => null,
});

interface FormMultiStepReducerTypes {
  children: ReactNode;
}

export const FormMultiStepReducer = ({
  children,
}: FormMultiStepReducerTypes) => {
  const [state, dispatch] = useReducer(
    ReducerFormMultiStep,
    initialStateFormMultiStep
  );

  const context = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <FormMultiStepContext.Provider value={context}>
      {children}
    </FormMultiStepContext.Provider>
  );
};

export const useFormMultiStepContext = () => useContext(FormMultiStepContext);
