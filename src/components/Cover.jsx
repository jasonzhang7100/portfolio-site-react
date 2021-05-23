import React from "react";
import Typed from "react-typed";
import { Box, Grid, Avatar, Typography, makeStyles } from "@material-ui/core";

import avatar from "../images/avatar.png";

const useStyles = makeStyles({
  cover__canvas: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 1,
    width: "100%",
    textAlign: "center",
  },
  cover__avatar: {
    width: 160,
    height: 160,
    marginBottom: 16,
  },
  cover__title: {
    color: "tomato",
  },
  cover__subtitle: {
    color: "aquamarine",
  },
});

const Cover = () => {
  const classes = useStyles();
  return (
    <Box className={classes.cover__canvas}>
      <Grid container justify="center">
        <Avatar className={classes.cover__avatar} src={avatar} alt="Jason Zhang" />
      </Grid>
      <Typography className={classes.cover__title} variant="h4">
        <Typed strings={["Jason Zhang"]} typeSpeed={80} />
      </Typography>

      <Typography className={classes.cover__subtitle} variant="h5">
        <Typed
          strings={["FRONTEND DEVELOPER", "BACKEND DEVELOPER", "FULLSTACK DEVELOPER"]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Cover;
