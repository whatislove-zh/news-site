import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { Box, Paper, Avatar, Typography, Button } from "@mui/material";
import { logoutUser } from "../store/features/profleInfo/profileSlice";
import { useEffect } from "react";

const headImg = "https://source.unsplash.com/random";

export const Profile: React.FC = () => {
  const isUserSignIn = useAppSelector((state) => state.profile.isSignIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserSignIn) {
      navigate("/login");
    }
  }, [isUserSignIn, navigate]);

  const dispatch = useAppDispatch();

  const logOutHendler = () => {
    dispatch(logoutUser());
    localStorage.removeItem('user');
  };

  return (
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <Paper
        sx={{
          height: 350,
          width:"100%",
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${headImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          color: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: "100px", height: "100px" }} src={"US"} />
          <Typography variant="h6">userName</Typography>
          <Typography variant="body2" sx={{ fontSize: "12px", m: "15px" }}>
            userSummary
          </Typography>
        </Box>
      </Paper>
      <Button variant="outlined" onClick={logOutHendler} sx={{m:"30px"}}>
        LogOut
      </Button>
    </Box>
  );
};
