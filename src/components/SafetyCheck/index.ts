import { makeStyles } from "@material-ui/core";
import SafetyCheck from "./SafetyCheck";

export const useStyles = makeStyles({
  wrapper: {
    paddingTop: "3em",
  },
  circle: {
    boxShadow: "-1px 0px 6px 1px rgba(0, 0, 0, 0.3)",
  },
  ctaWrapper: {
    paddingTop: "2em !important",
    "text-align": "center",
    borderTop: "1px dashed #ccc",
    textAlign: "center",
  },
  hasDivider: {
    borderTop: "1px dashed #ccc",
  },
  questionHeader: {
    margin: "1em 0",
  },
  sliderRoot: {
    marginTop: "2em",
    marginLeft: "2em",
    width: "80%",
  },
  sliderLabel: { transform: "scale(1.2)" },
});

export default SafetyCheck;
