import { Box, Card, CardContent, makeStyles, Slide } from "@material-ui/core";
import React from "react";
import CloseButton from "./CloseButton";
import DefaultContent from "./DefaultContent";
import Section from "./Section";

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

const Leg = ({ step }) => {
  return (
    <Card>
      <CardContent>
        <h1>{step.name}</h1>
        <p>
          {step.distance} Meter: {step.maneuver.instruction}
        </p>
        <pre>{JSON.stringify(step, null, 2)}</pre>
      </CardContent>
    </Card>
  );
};

const DetailPanel = ({ open, onClose, feature }) => {
  const classes = useStyles();

  return (
    <Slide direction="left" in={open} appear={false}>
      <Box className={classes.root}>
        <CloseButton className={classes.closeButton} onClick={onClose} />
        {feature == null && <DefaultContent />}
        {feature != null && <Section {...feature.properties} />}
      </Box>
    </Slide>
  );
};
export default DetailPanel;
