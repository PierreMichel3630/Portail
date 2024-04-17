import { AppBar, Box, Toolbar } from "@mui/material";
import { important, px } from "csx";

import { LanguagesMenu } from "./LanguageMenu";
import { ModeMenu } from "./ModeMenu";

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
        <Toolbar id="toolbar" sx={{ p: important(px(0)), gap: px(8) }}>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <ModeMenu />
            <LanguagesMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
