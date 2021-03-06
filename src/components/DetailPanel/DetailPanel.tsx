import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import SafetyCheck from "~/components/SafetyCheck";
import CloseButton from "./CloseButton";
import DefaultContent from "./DefaultContent";

import sampleFeature from "./sample_feature.json";

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

const DetailPanel = ({ onClose, feature }) => {
  const classes = useStyles();

  // feature = sampleFeature;

  return (
    <Box className={classes.root}>
      <CloseButton className={classes.closeButton} onClick={onClose} />
      {feature == null && <DefaultContent />}
      {feature != null && (
        <SafetyCheck {...feature.properties} onClose={onClose} />
      )}
    </Box>
  );
};
export default DetailPanel;
