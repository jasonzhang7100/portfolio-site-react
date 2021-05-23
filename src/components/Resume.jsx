import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  resume__header: {
    padding: "2rem 0",
    color: "tomato",
  },

  resume__timeline: {
    position: "relative",
    // padding: "1rem",
    // margin: "o auto",
    "&::before": {
      content: "''",
      position: "absolute",
      right: "2rem",
      height: "100%",
      border: "1px solid white",
      zIndex: -1,
    },
    // "&::after": {
    //   content: "''",
    //   display: "table",
    //   clear: "both",
    // },
    [theme.breakpoints.up("md")]: {
      // padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },

  resume__timeline__item: {
    // padding: "1rem",
    // borderBottom: "2px solid tan",
    position: "relative",
    margin: "2rem 4rem",
    // clear: "both",
    // "&:after": {
    //   content: "''",
    //   position: "absolute",
    // },
    "&::before": {
      content: "''",
      position: "absolute",
      top: "calc(50% - .5rem)",
      right: "-3.6rem",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: ".5rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "43%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        marginLeft: "39rem",
        // float: "right",
        // margin: "1rem",
        // borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        left: "-3.4rem",
        right: "auto",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },

  resume__timeline__year: {
    // maxWidth: "9.375rem",
    width: "9rem",
    padding: "0.4rem",
    borderRadius: ".5rem",
    margin: "1rem 3rem 1rem auto",
    background: "tomato",
    // marginRight: "3rem",
    // fontSize: "1.6rem",
    color: "white",
    textAlign: "center",

    // lineHeight: 1,
    // "&:before": {
    //   display: "none",
    // },

    [theme.breakpoints.up("md")]: {
      // textAlign: "center",
      margin: "1rem auto",
      // "&:nth-of-type(2n)": {
      //   float: "none",
      //   margin: "0 auto",
      // },
      // "&:nth-of-type(2n):before": {
      //   display: "none",
      // },
    },
  },

  resume__timeline__title: {
    color: "white",
  },

  resume__timeline__subtitle: {
    color: "tomato",
  },
  resume__timeline__content: {
    color: "aquamarine",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header">
      <Typography variant="h4" align="center" className={classes.resume__header}>
        WORKING EXPERIENCE
      </Typography>

      <Box component="div" className={classes.resume__timeline}>
        <Box component="div" className={classes.resume__timeline__item}>
          <Typography variant="h5" align="center" className={classes.resume__timeline__title}>
            FULLSTACK DEVELOPER
          </Typography>
          <Typography variant="h6" align="center" className={classes.resume__timeline__subtitle}>
            Jiangren Company
          </Typography>
          <Typography align="center" className={classes.resume__timeline__content}>
            Projects: three <br />
            Tech Stack: react, ts
            <br />
            Projects: three <br />
            Tech Stack: react, ts Tech Stack: react, ts Tech Stack: react, ts Tech Stack: react, ts Tech
            Stack: react, ts Tech Stack: react, ts
            <br />
            Projects: three <br />
            Tech Stack: react, ts
            <br />
            Projects: three <br />
            Tech Stack: react, ts
          </Typography>
        </Box>

        <Typography
          variant="h5"
          // className={`${classes.resume__timeline__year} ${classes.resume__timeline__item}`}
          className={classes.resume__timeline__year}
        >
          03/2021
        </Typography>

        <Box component="div" className={classes.resume__timeline__item}>
          <Typography variant="h5" align="center" className={classes.resume__timeline__title}>
            FRONTEND DEVELOPER
          </Typography>
          <Typography variant="h6" align="center" className={classes.resume__timeline__subtitle}>
            Credit Manager Company
          </Typography>
          <Typography align="center" className={classes.resume__timeline__content}>
            Projects: one <br />
            Tech Stack: react, ts, aws Tech Stack: react, ts Tech Stack: react, ts Tech Stack: react, ts Tech
            Stack: react, ts Tech Stack: react, ts Tech Stack: react, ts
          </Typography>
        </Box>

        <Typography
          variant="h5"
          // className={`${classes.resume__timeline__year} ${classes.resume__timeline__item}`}
          className={classes.resume__timeline__year}
        >
          07/2020
        </Typography>

        <Box component="div" className={classes.resume__timeline__item}>
          <Typography variant="h5" align="center" className={classes.resume__timeline__title}>
            FRONTEND DEVELOPER
          </Typography>
          <Typography variant="h6" align="center" className={classes.resume__timeline__subtitle}>
            Retech Company
          </Typography>
          <Typography align="center" className={classes.resume__timeline__content}>
            Projects: one <br />
            Tech Stack: react, ts, aws
          </Typography>
        </Box>

        <Typography
          variant="h5"
          // className={`${classes.resume__timeline__year} ${classes.resume__timeline__item}`}
          className={classes.resume__timeline__year}
        >
          09/2018
        </Typography>

        <Box component="div" className={classes.resume__timeline__item}>
          <Typography variant="h5" align="center" className={classes.resume__timeline__title}>
            UI & WEB DEVELOPER
          </Typography>
          <Typography variant="h6" align="center" className={classes.resume__timeline__subtitle}>
            Retech Company
          </Typography>
          <Typography align="center" className={classes.resume__timeline__content}>
            Projects: one <br />
            Tech Stack: react, ts, aws
          </Typography>
        </Box>

        <Typography
          variant="h5"
          // className={`${classes.resume__timeline__year} ${classes.resume__timeline__item}`}
          className={classes.resume__timeline__year}
        >
          09/2017
        </Typography>
      </Box>
    </Box>
  );
};

export default Resume;
