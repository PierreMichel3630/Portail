import { Button, Grid, Paper, SvgIcon, Typography } from "@mui/material";
import { percent, px } from "csx";
import { Application } from "src/models/Application";
import { Colors } from "src/style/Colors";
import { JsonLanguageBlock } from "./JsonLanguage";

import { useTranslation } from "react-i18next";
import { GooglePlayIcon } from "src/assets/google-play";

interface Props {
  application: Application;
}

export const CardApplication = ({ application }: Props) => {
  const { t } = useTranslation();

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
        {application.googleplay !== null && (
          <Grid item>
            <Button
              fullWidth
              variant="contained"
              startIcon={<SvgIcon component={GooglePlayIcon} inheritViewBox />}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                if (application.googleplay !== null)
                  openNewTab(application.googleplay);
              }}
            >
              {t("commun.googleplay")}
            </Button>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};
