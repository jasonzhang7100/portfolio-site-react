import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import {
  makeStyles,
  Drawer,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Home from '@material-ui/icons/Home';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import Apps from '@material-ui/icons/Apps';
import ContactMail from '@material-ui/icons/ContactMail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ComputerIcon from '@material-ui/icons/Computer';

import avatar from '../assets/images/avatar.png';

const useStyles = makeStyles((theme) => ({
  navbar__slider: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '14rem',
    background: '#202020',
    height: '100%',
  },
  navbar__avatar: {
    margin: '2rem auto',
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  navbar__slider__item: {
    color: 'aquamarine',
    padding: '.4rem 0',
  },
  navbar__bar: {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#202020',
    minHeight: '2rem',
    minWidth: '375px',
  },
  navbar__menu__icon: {
    margin: '0 .6rem',
    color: 'aquamarine',
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: 'HOME', listPath: '/' },
  {
    listIcon: <DeveloperModeIcon />,
    listText: 'TECHSTACK',
    listPath: '/techstack',
  },
  { listIcon: <AssignmentInd />, listText: 'RESUME', listPath: '/resume' },
  { listIcon: <Apps />, listText: 'PROJECTS', listPath: '/projects' },
  { listIcon: <ContactMail />, listText: 'CONTACT', listPath: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.navbar__slider} component="div">
      <Avatar
        className={classes.navbar__avatar}
        src={avatar}
        alt="Jason Zhang"
      />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.navbar__slider__item}
            onClick={() => setOpen(false)}
            component={ReactLink}
            to={item.listPath}
          >
            <ListItemIcon className={classes.navbar__slider__item}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static">
          <Toolbar className={classes.navbar__bar}>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon className={classes.navbar__menu__icon} />
            </IconButton>
            <Box>
              <Link href="https://github.com/jasonzhang7100" target="_blank">
                <GitHubIcon className={classes.navbar__menu__icon} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/jason-zhang-syd/"
                target="_blank"
              >
                <LinkedInIcon className={classes.navbar__menu__icon} />
              </Link>
              <Link href="http://106.12.125.99/" target="_blank">
                <ComputerIcon className={classes.navbar__menu__icon} />
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        {sideList()}
      </Drawer>
    </>
  );
};

export default Navbar;
