import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  header:{
    background: '#000000',
    height: '10vh',
    width: '100%',
    color: '#FFFFFF',
  }
})

function Header() {
  const classes = useStyles();
  return(
    <div className={classes.header}>
      <h2>Movie Library CRUD</h2>
    </div>
  );

}

export default Header;