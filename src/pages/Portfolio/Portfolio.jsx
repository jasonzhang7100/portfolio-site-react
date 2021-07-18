import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import ComputerIcon from '@material-ui/icons/Computer';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { portfolioData } from './portfolioData';

const useStyles = makeStyles((theme) => ({
  portfolio__container: {
    overflow: 'hidden',
    margin: theme.spacing(4),
    maxWidth: 350,
    border: '1px solid aquamarine',
    borderRadius: '1rem',
  },

  portfolio__img: {
    paddingTop: '80%',
  },

  portfolio__icon: {
    color: 'grey',
  },

  portfolio__expansion: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },

  portfolio__expansion__open: {
    transform: 'rotate(180deg)',
  },

  portfolio__collapse: {
    position: 'absolute',
    maxWidth: 350,
    padding: '1rem',
    borderRadius: '1rem',
    marginTop: '-1rem',
    marginLeft: '.6rem',
    background: 'lightgrey',
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  const [expandedId, setExpandedId] = useState(-1);

  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  return (
    <Box component="div">
      <Grid container justify="center">
        {portfolioData.map((project, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            key={project.name}
            className={classes.portfolio__container}
          >
            <Card>
              <CardHeader title={project.name} align="center" />
              <CardMedia
                className={classes.portfolio__img}
                image={project.image}
                title="Project Img"
              />
              <CardContent>
                <Typography
                  align="center"
                  variant="body2"
                  color="textSecondary"
                >
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="check sourcecode">
                  <Link href={project.gitUrl} target="_blank">
                    <GitHubIcon className={classes.portfolio__icon} />
                  </Link>
                </IconButton>
                {project.appUrl ? (
                  <IconButton aria-label="check website">
                    <Link href={project.appUrl} target="_blank">
                      <ComputerIcon className={classes.portfolio__icon} />
                    </Link>
                  </IconButton>
                ) : null}
                <IconButton
                  className={clsx(classes.portfolio__expansion, {
                    [classes.portfolio__expansion__open]: expandedId === i,
                  })}
                  onClick={() => handleExpandClick(i)}
                  aria-expanded={expandedId === i}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                <Box className={classes.portfolio__collapse}>
                  <Typography paragraph>Tech Stack:</Typography>
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

export default Portfolio;
