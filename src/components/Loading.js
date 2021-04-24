import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  bottom: {
    color: theme.status.alert,
  }}),
)

function Loading() {
  const classes = useStyles();
    return (
      <CircularProgress  className={classes.bottom}/>
    );
}

export default Loading;
