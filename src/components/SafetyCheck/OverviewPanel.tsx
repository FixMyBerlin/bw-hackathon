import { Grid, Typography, Box, CircularProgress } from "@material-ui/core";
import React from "react";
import { useStyles } from ".";

const OverviewPanel = ({ rating, gid, gemeinde }) => {
  const classes = useStyles();

  return (
    <Grid container item alignItems="center" className={classes.wrapper}>
      <Grid item xs={4}>
        <Typography variant="caption">
          <strong>Abschnitt {gid}</strong>
        </Typography>
        <Typography variant="caption" component="div" color="textSecondary">
          {gemeinde}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Box position="relative" display="inline-flex">
          <CircularProgress
            variant="determinate"
            value={rating}
            size={64}
            classes={{ circle: classes.circle }}
          />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="button"
              component="div"
              color="textPrimary"
            >{`${Math.round(rating)}%`}</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="caption" component="div" color="textSecondary">
          der Daten erfasst
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OverviewPanel;
