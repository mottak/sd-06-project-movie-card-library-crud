import React from 'react';
import minion from '../image/minion.png'
import Header from '../components/Header'
import { Typography, Box } from '@material-ui/core';
import Section from '../assets/themeComponets/Section';
import SectionItem from '../assets/themeComponets/SectionItem';

function NotFound (){

    return (
      <Section
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Header />
        <SectionItem sm={6}>
          <img src={minion} alt="Página não encontrada" style={ { height: "480px"}} />
        </SectionItem>
        <Typography>
          <SectionItem sm={6} alignItems="center">
            <Box fontFamily="Roboto" fontSize="70px">Página não encontrada</Box>
          </SectionItem>
        </Typography>
      </Section>
    );

}

export default NotFound;
