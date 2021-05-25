import React from "react";
import {
  makeStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import project1 from "../images/mern-stack.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: "80%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader title="Pizza Order Project" />
      <CardMedia className={classes.media} image={project1} title="Pizza Order" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          It is a Pizza Order App created by React.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} unmountOnExit>
        <CardContent>
          <Typography paragraph>Stack:</Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add
            chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8
            minutes.
          </Typography>
          <Typography paragraph>Add rice and stir very gently to distribute.</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
