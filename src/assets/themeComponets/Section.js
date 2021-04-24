import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const Section = React.memo(({ children, ...others }) => (
  <Grid {...others} container>
    {children}
  </Grid>
));

export default Section;

Section.propTypes = {
  children: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
