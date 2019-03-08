/**
 *
 * Title
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

/* eslint-disable react/prefer-stateless-function */
class Title extends React.Component {
  render() {
    const style = {
      fontSize: 30,
    };

    return (
      <div style={style}>
        <FormattedMessage {...this.props.text} />
      </div>
    );
  }
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
