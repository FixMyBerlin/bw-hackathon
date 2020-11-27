import { Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "-1px 0px 6px 1px rgba(0, 0, 0, 0.3)",
    height: "100%",
    padding: "22px 14px",
    backgroundColor: "white",
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      position: "initial",
      left: "auto",
      right: 0,
      width: "30em",
    },
  },
}));

const DetailPanel = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <h1>BW Hackathon</h1>
      <p>
        Willkommen beim RadNetz-Explorer. Das ist eine Beschreibung, das ist
        eine Beschreibung, das ist eine Beschreibung.
      </p>
      <p>Klicken Sie auf einen Streckenabschnitt um loszulegen.</p>
    </Box>
  );
};
export default DetailPanel;
