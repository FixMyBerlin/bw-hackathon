import React, { useState } from "react";
import FinalScreen from "./FinalScreen";
import OverviewPanel from "./OverviewPanel";
import ResultScreen from "./ResultScreen";
import { Screen1, Screen2, Screen3, Screen4 } from "./Screens";
import StartScreen from "./StartScreen";

const SafetyCheck = ({ gid, gemeinde, onClose, ...features }) => {
  const [screen, setScreen] = useState(0);
  const [rating, setRating] = useState(23);
  const [showResult, setShowResult] = useState(false);
  console.log(features);

  if (showResult)
    return <ResultScreen gid={gid} {...features} onClose={onClose} />;

  return (
    <React.Fragment>
      <OverviewPanel rating={rating} gemeinde={gemeinde} gid={gid} />
      {screen == 0 && <StartScreen onClick={() => setScreen(screen + 1)} />}
      {screen == 1 && (
        <Screen1
          onClick={() => {
            setScreen(screen + 1);
            setRating(45);
          }}
        />
      )}
      {screen == 2 && (
        <Screen2
          onClick={() => {
            setScreen(screen + 1);
            setRating(53);
          }}
        />
      )}
      {screen == 3 && (
        <Screen3
          onClick={() => {
            setScreen(screen + 1);
            setRating(89);
          }}
        />
      )}
      {screen == 4 && (
        <Screen4
          onClick={() => {
            setScreen(screen + 1);
            setRating(100);
          }}
        />
      )}
      {screen == 5 && (
        <FinalScreen
          onClick={() => {
            setRating(23);
            setShowResult(true);
          }}
        />
      )}
    </React.Fragment>
  );
};

export default SafetyCheck;
