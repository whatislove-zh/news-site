import { AppBar, Box, Toolbar, Button } from "@mui/material";

import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hook";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  ua: { nativeName: "Ukrainian" },
};

export const Header = () => {
  const { t, i18n } = useTranslation();

  const user = useAppSelector((state) => state.profile);
  const isSignIn = user.isSignIn;

  return (
    <AppBar position="static" sx={{ background: "none", mb: "30px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          {Object.keys(lngs).map((lng) => (
            <Button
              key={lng}
              onClick={() => {
                i18n.changeLanguage(lng);
              }}
            >
              {lng}
            </Button>
          ))}
        </Box>

        <Box>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button>{t("home")}</Button>
          </Link>
          <Link to="news" style={{ textDecoration: "none" }}>
            <Button>{t("news")}</Button>
          </Link>

          {isSignIn ? (
            <Link to="profile" style={{ textDecoration: "none" }}>
              <Button>{t("profile")}</Button>
            </Link>
          ) : (
            <Link to="login" style={{ textDecoration: "none" }}>
              <Button>{t("loginLink")}</Button>
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
