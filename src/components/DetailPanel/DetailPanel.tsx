import { Box, makeStyles, Slide } from "@material-ui/core";
import React from "react";
import CloseButton from "./CloseButton";

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
    zIndex: 10,
    [theme.breakpoints.up("md")]: {
      position: "initial",
      left: "auto",
      right: 0,
      width: "30em",
    },
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
}));

const DetailPanel = ({ open, onClose }) => {
  const classes = useStyles();

  return (
    <Slide direction="left" in={open} appear={false}>
      <Box className={classes.root}>
        <CloseButton className={classes.closeButton} onClick={onClose} />
        <h1>BW Hackathon</h1>
        <p>
          Willkommen beim RadNetz-Explorer. Das ist eine Beschreibung, das ist
          eine Beschreibung, das ist eine Beschreibung.
        </p>
        <p>Klicken Sie auf einen Streckenabschnitt um loszulegen.</p>
      </Box>
    </Slide>
  );
};
export default DetailPanel;
