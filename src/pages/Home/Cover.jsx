import Typed from 'react-typed';
import { Box, Grid, Avatar, Typography, makeStyles } from '@material-ui/core';

import avatar from '../../assets/images/avatar.png';

const useStyles = makeStyles({
  cover__canvas: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: 1,
    width: '100%',
    textAlign: 'center',
  },
  cover__avatar: {
    width: 160,
    height: 160,
    marginBottom: '2rem',
  },
  cover__title: {
    color: 'tomato',
    fontSize: '2rem',
  },
  cover__subtitle: {
    color: 'aquamarine',
    fontSize: '1.2rem',
  },
});

const Cover = () => {
  const classes = useStyles();
  return (
    <Box className={classes.cover__canvas}>
      <Grid container justify="center">
        <Avatar
          className={classes.cover__avatar}
          src={avatar}
          alt="Jason Zhang"
        />
      </Grid>
      <Typography className={classes.cover__title}>
        <Typed strings={['Jason Zhang']} typeSpeed={80} />
      </Typography>
      <Typography className={classes.cover__subtitle}>
        <Typed
          strings={[
            'FRONTEND DEVELOPER',
            'BACKEND DEVELOPER',
            'FULLSTACK DEVELOPER',
          ]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Cover;
