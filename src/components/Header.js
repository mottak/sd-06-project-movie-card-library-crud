import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Section from '../assets/themeComponets/Section';
import SectionItem from '../assets/themeComponets/SectionItem';
import { SvgIcon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header:{
    background: theme.status.dark,
    height: '100%',
    width: '100%',
    color: theme.status.light,
  },
  fontTitle: {
    fontFamily: ['Arial', 'sans-serif'],
    fontSize: 38,
  },
  linkClass: {
    textDecoration: 'none',
    color: theme.status.alert,
    fontFamily: ['Arial', 'sans-serif'],
    fontSize: 14,
  },
  homeDesign: {
    color: theme.status.light,
    fontSize: 30
  }
 
}))
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function Header({title}) {
  const classes = useStyles();
  let history = useHistory();
  return(
    <Section
      className={classes.header}
      direction="row"
      justify="space-around"
      alignItems="center"
    >
      {history.location.pathname !== '/' 
      ? 
      <SectionItem sm={3} >
        <Link to="/" className={classes.linkClass}>
        <HomeIcon className={classes.homeDesign} />
        </Link>
      </SectionItem>
      : null
      }
      <SectionItem sm={9}>
        <h2 className={classes.fontTitle}>{title}</h2>
      </SectionItem>
    </Section>
  );

}

export default Header;