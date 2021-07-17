import React from 'react';
import {
  makeStyles,
  Box,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import GitHubIcon from '@material-ui/icons/GitHub';
import ComputerIcon from '@material-ui/icons/Computer';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import project1 from '../../assets/images/html-css-javascript-lg.jpg';
import project2 from '../../assets/images/html-css-javascript.jpg';
import project3 from '../../assets/images/javascript-fullstack.jpg';
import project4 from '../../assets/images/mern-stack.jpg';
import project5 from '../../assets/images/react-redux.jpg';
import project6 from '../../assets/images/react.png';

const projects = [
  {
    name: 'Project 1',
    description: `It is a Pizza Order App 1 created by React. `,
    introduction: `1 Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add
    chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8
    minutes.`,
    image: project1,
  },
  {
    name: 'Project 2',
    description: `It is a Pizza Order App 2 created by React.`,
    introduction: `2 Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add
    chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8
    minutes.`,
    image: project2,
  },
  {
    name: 'Project 3',
    description: `It is a Pizza Order App 3 created by React.`,
    introduction: `3 Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add
    chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8
    minutes.`,
    image: project3,
  },
  {
    name: 'Project 4',
    description: `It is a Pizza Order App 4 created by React.`,
    introduction: `4 Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add
    chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8
    minutes.`,
    image: project4,
  },
  {
    name: 'Project 5',
    description: `It is a Pizza Order App 5 created by React.`,
    introduction: `5 Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add
    chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8
    minutes.`,
    image: project5,
  },
  {
    name: 'Project 6',
    description: `It is a Pizza Order App 6 created by React.`,
    introduction: `6 Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add
    chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8
    minutes.`,
    image: project6,
  },
];

const useStyles = makeStyles((theme) => ({
  projects__container: {
    margin: theme.spacing(3),
    maxWidth: 350,
  },
  projects__img: {
    height: 0,
    paddingTop: '70%',
  },
  projects__expansion: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  projects__expansion__open: {
    transform: 'rotate(180deg)',
  },
  projects__collapse: {
    position: 'absolute',
    maxWidth: 350,
    padding: '1rem',
    borderRadius: '4px',
    marginTop: '.5rem',
    background: 'white',
  },
}));

const Projects = () => {
  const classes = useStyles();
  const [expandedId, setExpandedId] = React.useState(-1);

  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  return (
    <Box component="div">
      <Grid container justify="center">
        {projects.map((project, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            key={i}
            className={classes.projects__container}
          >
            <Card>
              <CardHeader title={project.name} />
              <CardMedia
                className={classes.projects__img}
                image={project.image}
                title="Project Img"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="check sourcecode">
                  <GitHubIcon />
                </IconButton>
                <IconButton aria-label="check demo">
                  <ComputerIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.projects__expansion, {
                    [classes.projects__expansion__open]: expandedId === i,
                  })}
                  onClick={() => handleExpandClick(i)}
                  aria-expanded={expandedId === i}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                <Box className={classes.projects__collapse}>
                  <Typography paragraph>Stack:</Typography>
                  <Typography paragraph>{project.introduction}</Typography>
                </Box>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
