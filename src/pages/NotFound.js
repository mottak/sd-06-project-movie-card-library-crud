import React from 'react';
import minion from '../image/minion.png'
import Section from '../assets/themeComponets/Section';
import SectionItem from '../assets/themeComponets/SectionItem';

function NotFound (){

    return (
      <Section data-testid="404-error">
  
        <SectionItem sm={6}>
          <img src={minion} alt="Página não encontrada" style={ { height: "500px"}} />
        </SectionItem>
        <SectionItem sm={6}>
          <h3>Página não encontrada</h3>
        </SectionItem>
      </Section>
    );

}

export default NotFound;
