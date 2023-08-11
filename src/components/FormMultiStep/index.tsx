"use client";

import { useFormMultiStepContext } from "@/context/FormMultiStepContext";
import { useFormRegisterPageContext } from "@/context/FormRegisterPageContext";
import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";

import { useRouter } from "next/navigation";

import { ChangeEvent, useEffect } from "react";

export const FormPageMultiStep = () => {
  const lol = useRouter();

  console.log(lol);
  const { state, dispatch } = useFormMultiStepContext();

  const { state: stateFromRegister, dispatch: dispatchFromRegisterPage } =
    useFormRegisterPageContext();

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "update_value",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "update_value",
      field: e.target.name,
      payload: e.target.checked,
    });
  };

  useEffect(() => {
    if (stateFromRegister) {
      dispatch({
        type: "update_when_change_form",
        payload: { ...stateFromRegister },
      });
    }
  }, [dispatch, stateFromRegister]);

  return (
    <div className="container mx-auto max-w-3xl">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up - Page Empresas / Cadastrar
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              value={state.name}
              label="Name"
              name="name"
              onChange={(e) => handleTextChange(e)}
            />
            <Input
              size="lg"
              value={state.email}
              label="Email"
              name="email"
              onChange={(e) => handleTextChange(e)}
            />
            <Input
              type="password"
              value={state.password}
              size="lg"
              label="Password"
              name="password"
              onChange={(e) => handleTextChange(e)}
            />
          </div>
          <Checkbox
            name="terms"
            checked={state.terms}
            onClick={(e) => handleCheckChange(e)}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the Terms and Conditions
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth>
            Register
          </Button>
        </form>
      </Card>
    </div>
  );
};
