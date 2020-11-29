import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Logo from "./logo.svg";

const useStyles = makeStyles({
  logo: {
    height: "200px",
  },
});

const DefaultContent = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h1>Hilf bei der Radnetzplanung!</h1>
      <p>
        Wähle einen Routenabschnitt und trage Daten zur Situation vor Ort bei.
        Zoome in der Karte und klicke auf einen Abschnitt um zu beginnen.
      </p>
      <p>
        <strong>Hinweis:</strong> Dies ist eine Demo, die zum Teil mit
        statischen Bildschirminhalten (nicht aus dem Datensatz RadNETZ)
        arbeitet, Eingaben werden nicht persistent gespeichert.
      </p>
      <Box width={"100%"} justifyContent={"center"} display="flex" mt={2}>
        <img src={Logo} className={classes.logo} />
      </Box>
    </React.Fragment>
  );
};

export default DefaultContent;
