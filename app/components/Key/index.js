/**
 *
 * Key
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const KeyContainer = styled.div`
  border: 1px solid #ccc;
  margin-left: -1px;
  margin-bottom: -1px;
  flex-basis: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-family: 'Menlo';
  color: #666;

  &:hover {
    background: #eee;
    box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  }
`;

/* eslint-disable react/prefer-stateless-function */
class Key extends React.Component {
  getContent() {
    const { value, icon } = this.props;
    if (!icon) return value;
    return <FontAwesomeIcon icon={icon} />;
  }

  render() {
    const { value, onPress } = this.props;
    return (
      <KeyContainer onClick={() => onPress(value)}>
        {this.getContent()}
      </KeyContainer>
    );
  }
}

Key.propTypes = {
  icon: PropTypes.object,
  value: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Key;
