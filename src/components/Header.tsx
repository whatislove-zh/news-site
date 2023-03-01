import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hook";

export const Header = () => {
  const user = useAppSelector((state) => state.profile);
  const isSignIn = user.isSignIn;
  return (
    <AppBar position="static" sx={{ background: "none", mb: "30px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <IconButton size="large" edge="start" sx={{ color: "#000000" }}>
            <MenuRoundedIcon sx={{ fontSize: "25px" }} />
          </IconButton>
          <IconButton sx={{ padding: 0 }}>
            <Typography>Logo</Typography>
          </IconButton>
        </Box>
        <Box>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button>Home</Button>
          </Link>
          <Link to="news" style={{ textDecoration: "none" }}>
            <Button>News</Button>
          </Link>

          {isSignIn ? (
            <Link to="profile" style={{ textDecoration: "none" }}>
              <Button>Profile</Button>
            </Link>
          ) : (
            <Link to="login" style={{ textDecoration: "none" }}>
              <Button>Login</Button>
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
