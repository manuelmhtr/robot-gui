/**
 *
 * CodeDisplay
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const EMPTY_CHAR = '-';
const FILLED_CHAR = '●';

const Container = styled.div`
  font-size: 100px;
  font-family: 'Menlo';
  font-weight: 800;
  letter-spacing: 0.3em;
  padding-left: 0.3em;
`;

/* eslint-disable react/prefer-stateless-function */
class CodeDisplay extends React.Component {
  render() {
    const { code, maxLength } = this.props;
    return <Container>{getText(code, maxLength)}</Container>;
  }
}

function getText(code, maxLength) {
  const diff = maxLength - code.length;
  const prefix = repeatChar(FILLED_CHAR, code.length);
  const sufix = repeatChar(EMPTY_CHAR, diff);
  return `${prefix}${sufix}`;
}

function repeatChar(char, times) {
  return Array(...Array(Math.max(0, times))).reduce(str => `${str}${char}`, '');
}

CodeDisplay.propTypes = {
  code: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default CodeDisplay;
