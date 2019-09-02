import React from 'react';
import PropTypes from 'prop-types'

import Curiosity from './Curiosity'
import Mars from './Mars'
import Opportunity from './Opportunity'
import Spirit from './Spirit'

const Icons = ({type, ...props}) => {
  const components = {
    Curiosity,
    Mars,
    Opportunity,
    Spirit,
  };
  const Icon = components[type];

  if (!Icon) {
    return null;
  }

  return <Icon {...props} />

}

Icons.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Icons;
