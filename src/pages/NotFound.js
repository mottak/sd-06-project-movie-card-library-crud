import React from 'react';
import minion from '../image/minion.png'
import Header from '../components/Header'
import { Typography, Box } from '@material-ui/core';
import Section from '../assets/themeComponets/Section';
import SectionItem from '../assets/themeComponets/SectionItem';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  minionDesign: {
    padding: '2% 0 0 10%'
  },
  messageDesign: {
    alignSelf:"flex-start"
  }
})

function NotFound (){
const classes = useStyles();
    return (
      <Section
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Header />
        <SectionItem sm={6} className={classes.minionDesign}>
          <img src={minion} alt="Página não encontrada" style={ { width: "50%"}} />
        </SectionItem>
        <Typography>
          <SectionItem sm={6} className={classes.messageDesign}>
            <Box fontFamily="Roboto" style={ { width: "50%", fontSize: '60px'}}>Página não encontrada</Box>
          </SectionItem>
        </Typography>
      </Section>
    );

}

export default NotFound;
