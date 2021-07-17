import { Box, Typography, makeStyles } from '@material-ui/core';

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
    lineHeight: '1.9rem',
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
        <Box component="div" className={classes.resume__timeline__item}>
          <Typography className={classes.resume__timeline__title}>
            FULLSTACK DEVELOPER
          </Typography>
          <Typography className={classes.resume__timeline__subtitle}>
            JR Academy
          </Typography>
          <Typography className={classes.resume__timeline__content}>
            • Worked in an agile team using Jira and Bitbucket
            <br />
            • Used Express.js to develop the backend RESTful APIs
            <br />
            • Followed TDD and used Jest and Supertest to write backend test
            assertions
            <br />
            • Set MongoDB, by which wrote Schemas and Models, and developed CRUD
            controllers following the MVC architecture
            <br />
            • Wrote validator middleware with Joi
            <br />
            • Wrote API documents in YAML with Swagger, and tested them with
            Postman
            <br />
            • Manually set Webpack configuration for React frontend structure
            <br />
            • Wrote frontend test assertions with Enzyme following TDD
            <br />
            • Planned page routes, and developed main components with React
            Hooks and Styled-Components
            <br />
            • Set the component style with Flexbox and Position syntax, and
            realized responsive layout with Media Query
            <br />• Set Eslint and Husky for code checking and inter-group
            consistency
          </Typography>
        </Box>

        <Typography className={classes.resume__timeline__year}>
          03/2021
        </Typography>

        <Box component="div" className={classes.resume__timeline__item}>
          <Typography className={classes.resume__timeline__title}>
            WEB DEVELOPER
          </Typography>
          <Typography className={classes.resume__timeline__subtitle}>
            Credit Asset Management Ltd
          </Typography>
          <Typography className={classes.resume__timeline__content}>
            • Developed and maintained the company's portal website for business
            showcasing
            <br />• Built the company's blog system using Next.js
          </Typography>
        </Box>
        <Typography className={classes.resume__timeline__year}>
          07/2020
        </Typography>
      </Box>
    </Box>
  );
};

export default Resume;
