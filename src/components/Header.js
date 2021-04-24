import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header:{
    background: theme.status.dark,
    height: '100%',
    width: '100%',
    color: theme.status.light,
  },
  fontTitle: {
    fontFamily: ['Arial', 'sans-serif'],
    fontSize: 28,
  },
  buttonDesign: {
    background: theme.status.alert,
    color: theme.status.dark,
    fontFamily: ['Arial', 'sans-serif'],
    fontSize: 14
  },
  linkClass: {
    textDecoration: 'none',
    color: theme.status.alert
  },
 
}))

function Header({title}) {
  const classes = useStyles();
  let location = useLocation();
  return(
    <Grid className={classes.header}>
      <h2 className={classes.fontTitle}>{title}</h2>
      {location !== '/' 
      ? 
      <Link to="/" className={classes.linkClass}>
        Voltar para página inicial
      </Link>
      : null
      }
    </Grid>
  );

}

export default Header;