import { Box, Grid, Paper, SvgIcon, Typography } from "@mui/material";
import { percent, px } from "csx";
import { Application } from "src/models/Application";
import { Colors } from "src/style/Colors";
import { JsonLanguageBlock } from "./JsonLanguage";

import { GooglePlayIcon } from "src/assets/google-play";
import GitHubIcon from "@mui/icons-material/GitHub";

interface Props {
  application: Application;
}

export const CardApplication = ({ application }: Props) => {
  const openNewTab = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <Paper
      sx={{
        display: "flex",
        p: 1,
        minHeight: px(200),
        height: percent(100),
        backgroundImage: `url(${application.background})`,
        backgroundSize: "cover",
        borderRadius: px(10),
        alignItems: "center",
        border: "3px solid white",
        cursor: "pointer",
        position: "relative",
      }}
      onClick={() => openNewTab(application.link)}
    >
      <Grid container spacing={1} justifyContent="flex-end">
        <Grid
          item
          xs={12}
          sx={{
            alignItems: "center",
            display: "flex",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <img src={application.logo} width={60} />
          <Typography
            variant="h2"
            sx={{
              color: Colors.white,
              textShadow: "2px 2px 4px black",
            }}
          >
            {application.name}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <JsonLanguageBlock
            variant="body1"
            sx={{
              color: Colors.white,
              textShadow: "2px 2px 4px black",
            }}
            value={application.description}
          />
        </Grid>
        <Box
          sx={{
            position: "absolute",
            top: 5,
            right: 5,
            display: "flex",
            gap: 1,
          }}
        >
          {application.googleplay !== null && (
            <Box
              sx={{
                p: px(8),
                cursor: "pointer",
                backgroundColor: Colors.white,
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: Colors.grey3,
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                if (application.googleplay !== null)
                  openNewTab(application.googleplay);
              }}
            >
              <SvgIcon
                component={GooglePlayIcon}
                inheritViewBox
                fontSize="large"
              />
            </Box>
          )}
          <Box
            sx={{
              p: px(8),
              cursor: "pointer",
              backgroundColor: Colors.white,
              borderRadius: 2,
              "&:hover": {
                backgroundColor: Colors.grey3,
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              openNewTab(application.github);
            }}
          >
            <GitHubIcon fontSize="large" sx={{ color: Colors.black }} />
          </Box>
        </Box>
      </Grid>
    </Paper>
  );
};
