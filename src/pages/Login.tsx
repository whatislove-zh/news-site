import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/features/profleInfo/profileSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { formDataType } from "../types/types";
import { useEffect } from "react";


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

  useEffect(() => {}, []);

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
        Enter your username/email and password please
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
          placeholder="Login"
          helperText={errors?.login ? (errors.login.message as string) : ""}
          error={errors?.login ? true : false}
          {...register("login", {
            required: "This field is required",
            pattern: {
              value: /admin/,
              message: "Login is not correct",
            },
          })}
        />
        <TextField
          fullWidth
          autoComplete="password"
          type="password"
          sx={{ m: "15px" }}
          placeholder="Password"
          helperText={
            errors?.password ? (errors.password.message as string) : ""
          }
          error={errors?.password ? true : false}
          {...register("password", {
            required: "This field is required",
            pattern: {
              value: /12345/,
              message: "Password is correct",
            },
          })}
        />
        <Button
          disabled={!isValid}
          type="submit"
          variant="outlined"
          sx={{ width: "30%", minWidth: "100px" }}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
};
