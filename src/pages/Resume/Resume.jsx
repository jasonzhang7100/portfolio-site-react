import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { resumeData } from './resumeData';

const useStyles = makeStyles((theme) => ({
  resume__header: {
    padding: '1.5rem 0',
    color: 'tomato',
    fontSize: '1.5rem',
    textAlign: 'center',
  },

  resume__timeline: {
    position: 'relative',
    '&::before': {
      content: "''",
      position: 'absolute',
      right: '2rem',
      height: '100%',
      border: '1px solid white',
      zIndex: -1,
    },
    [theme.breakpoints.up('md')]: {
      '&:before': {
        right: 'auto',
        left: 'calc(50% - 1px)',
      },
    },
  },

  resume__timeline__item: {
    position: 'relative',
    margin: '2rem 4rem',
    '&::before': {
      content: "''",
      position: 'absolute',
      top: 'calc(50% - .5rem)',
      right: '-1.6rem',
      borderStyle: 'solid',
      borderColor: 'tomato tomato transparent transparent',
      borderWidth: '.5rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '43%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
      },
      '&:nth-of-type(2n)::before': {
        right: 'auto',
        left: '-1.4rem',
        borderColor: 'transparent transparent tomato tomato',
      },
    },
  },

  resume__timeline__year: {
    width: '9rem',
    padding: '0.4rem',
    borderRadius: '.5rem',
    margin: '1rem 3rem 1rem auto',
    background: 'tomato',
    color: 'white',
    fontSize: '1.2rem',
    textAlign: 'center',
    clear: 'left',
    [theme.breakpoints.up('md')]: {
      margin: '1rem auto',
      clear: 'both',
    },
  },

  resume__timeline__title: {
    padding: '.5rem 0',
    color: 'white',
    fontSize: '1.2rem',
    textAlign: 'center',
  },

  resume__timeline__subtitle: {
    color: 'tomato',
    fontSize: '1rem',
    textAlign: 'center',
  },

  resume__timeline__content: {
    padding: '.5rem',
    color: 'aquamarine',
    lineHeight: '1.8rem',
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <Box component="header">
      <Typography className={classes.resume__header}>
        WORKING EXPERIENCE
      </Typography>
      <Box component="div" className={classes.resume__timeline}>
        {resumeData.map((item) => (
          <React.Fragment key={item.position}>
            <Box component="div" className={classes.resume__timeline__item}>
              <Typography className={classes.resume__timeline__title}>
                {item.position}
              </Typography>
              <Typography className={classes.resume__timeline__subtitle}>
                {item.company}
              </Typography>
              <Typography className={classes.resume__timeline__content}>
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </Typography>
            </Box>
            <Typography className={classes.resume__timeline__year}>
              {item.beginningDate}
            </Typography>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default Resume;
