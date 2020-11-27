import { IconButton } from "@material-ui/core";
import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";

const CloseButton = (props) => {
  return (
    <IconButton aria-label="Detailpanel schließen" {...props}>
      <CancelIcon />
    </IconButton>
  );
};

export default CloseButton;
