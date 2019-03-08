/**
 *
 * Main
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import Keyboard from 'components/Keyboard';
import InputDisplay from '../InputDisplay';
import { makeSelectCode, makeSelectMaxCodeLength } from './selectors';
import { setCode } from './actions';
import reducer from './reducer';
import './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class Main extends React.Component {
  onKeyPress(key) {
    const { dispatch, code, maxCodeLength } = this.props;
    const newCode = getNewCode(code, maxCodeLength, key);
    dispatch(setCode(newCode));
  }

  render() {
    const { code, maxCodeLength } = this.props;
    return (
      <div id="main-container">
        <div id="keyboard-container">
          <Keyboard onKeyPress={this.onKeyPress.bind(this)} />
        </div>
        <div id="input-display-container">
          <InputDisplay code={code} maxCodeLength={maxCodeLength} />
        </div>
      </div>
    );
  }
}

function getNewCode(currentCode, maxCodeLength, key) {
  if (key === '<') return currentCode.slice(0, -1);
  if (currentCode.length >= maxCodeLength) return currentCode;
  return `${currentCode}${key}`;
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
  maxCodeLength: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  code: makeSelectCode(),
  maxCodeLength: makeSelectMaxCodeLength(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'main', reducer });

export default compose(
  withReducer,
  withConnect,
)(Main);
