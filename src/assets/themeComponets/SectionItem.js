import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const SectionItem = React.memo(({ children, ...others }) => {
  console.log('others', others)
  return(
  <Grid {...others} item container>
    
    { children }
  </Grid>
)});

export default SectionItem;

SectionItem.propTypes = {
  children: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
