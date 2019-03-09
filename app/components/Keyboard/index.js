/**
 *
 * Keyboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';

import Key from '../Key';

const KeyboardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const KeysRow = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: stretch;
  align-content: stretch;
`;

/* eslint-disable react/prefer-stateless-function */
class Keyboard extends React.Component {
  render() {
    const { onKeyPress } = this.props;

    return (
      <KeyboardContainer>
        <KeysRow>
          <Key onPress={onKeyPress} value="7" />
          <Key onPress={onKeyPress} value="8" />
          <Key onPress={onKeyPress} value="9" />
        </KeysRow>
        <KeysRow>
          <Key onPress={onKeyPress} value="4" />
          <Key onPress={onKeyPress} value="5" />
          <Key onPress={onKeyPress} value="6" />
        </KeysRow>
        <KeysRow>
          <Key onPress={onKeyPress} value="1" />
          <Key onPress={onKeyPress} value="2" />
          <Key onPress={onKeyPress} value="3" />
        </KeysRow>
        <KeysRow>
          <Key onPress={onKeyPress} value="" />
          <Key onPress={onKeyPress} value="0" />
          <Key onPress={onKeyPress} value="<" icon={faBackspace} />
        </KeysRow>
      </KeyboardContainer>
    );
  }
}

Keyboard.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
};

export default Keyboard;
