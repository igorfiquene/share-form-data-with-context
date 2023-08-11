"use client";

import { FormPageMultiStep } from "@/components/FormMultiStep";
import { FormMultiStepReducer } from "@/context/FormMultiStepContext";

export default function Cadastrar() {
  return (
    <div className="container mx-auto max-w-3xl">
      <FormMultiStepReducer>
        <FormPageMultiStep />
      </FormMultiStepReducer>
    </div>
  );
}
