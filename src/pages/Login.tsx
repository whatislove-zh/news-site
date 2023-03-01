import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/features/profleInfo/profileSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { formDataType } from "../types/types";
import { useEffect } from "react";
import {useTranslation} from "react-i18next"

export const Login = () => {
  const isUserSignIn = useAppSelector((state) => state.profile.isSignIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserSignIn) {
      navigate("/profile");
    }
  }, [isUserSignIn, navigate]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<formDataType>({
    mode: "onBlur",
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<formDataType> = (data) => {
    dispatch(loginUser(data));
    localStorage.setItem("user", JSON.stringify({ ...data, isSignIn: true }));
    reset();
    navigate("/profile");
  };
  const {t} = useTranslation()

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "75vh",
      }}
    >
      <Typography variant="h5">
        {t("loginHead")}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "50%",
          margin: "25px",
        }}
      >
        <TextField
          fullWidth
          autoComplete="email"
          sx={{ m: "15px" }}
          placeholder={t("loginField") as string}
          helperText={errors?.login ? (errors.login.message as string) : ""}
          error={errors?.login ? true : false}
          {...register("login", {
            required: t("requiredField") as string,
            pattern: {
              value: /admin/,
              message: t("loginError"),
            },
          })}
        />
        <TextField
          fullWidth
          autoComplete="password"
          type="password"
          sx={{ m: "15px" }}
          placeholder={t("password") as string}
          helperText={
            errors?.password ? (errors.password.message as string) : ""
          }
          error={errors?.password ? true : false}
          {...register("password", {
            required: t("requiredField") as string,
            pattern: {
              value: /12345/,
              message: t("passwordError"),
            },
          })}
        />
        <Button
          disabled={!isValid}
          type="submit"
          variant="outlined"
          sx={{ width: "30%", minWidth: "100px" }}
        >
          {t("signIn")}
        </Button>
      </Box>
    </Box>
  );
};
