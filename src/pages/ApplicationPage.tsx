import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { selectApplications } from "src/api/application";
import { CardApplication } from "src/components/Card";
import { Application } from "src/models/Application";
import { sortByName } from "src/utils/sort";

export const ApplicationPage = () => {
  const { t } = useTranslation();

  const [applications, setApplications] = useState<Array<Application>>([]);

  useEffect(() => {
    const getApplications = () => {
      selectApplications().then(({ data }) => {
        if (data)
          setApplications((data as Array<Application>).sort(sortByName));
      });
    };
    getApplications();
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography variant="h1" textTransform="uppercase">
          {t("appname")}
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography variant="caption">{t("description")}</Typography>
      </Grid>
      {applications.map((application) => (
        <Grid item xs={12} md={6}>
          <CardApplication application={application} />
        </Grid>
      ))}
    </Grid>
  );
};
