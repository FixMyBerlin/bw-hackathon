import { Box, Button } from "@material-ui/core";
import React from "react";

const FinalScreen = ({ onClick }) => {
  return (
    <Box mt={2}>
      {/* <h1>Blumenstraße</h1>
      <h2>Subjektive Sicherheit 78%</h2>
      <h2>Ausbaustandard Qualität</h2>
      <p>80% Schutzstreifen</p>
      <p>Kein Radweg vorhanden</p>
      <p>Ard der Straße</p>
      <h2>Sicherheit</h2>
      <h2>Zustand und Komfort</h2> */}
      <h1>Vielen Dank!</h1>
      <p>
        Sie haben alle fehlenden Daten eingetragen, so dass die subjektive
        Sicherheit dieses Abschnitts berechnet werden kann.
      </p>
      <Button variant="contained" onClick={onClick}>
        Ergebnis ansehen
      </Button>
    </Box>
  );
};

export default FinalScreen;
