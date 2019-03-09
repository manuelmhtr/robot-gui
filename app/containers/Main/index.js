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
import ErrorView from '../ErrorView';
import SuccessView from '../SuccessView';
import reducer from './reducer';
import { setCode } from './actions';
import {
  makeSelectCode,
  makeSelectExpectedCode,
  makeSelectMaxCodeLength,
} from './selectors';
import './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class Main extends React.Component {
  onKeyPress = key => {
    const { dispatch, code, maxCodeLength } = this.props;
    const newCode = getNewCode(code, maxCodeLength, key);
    dispatch(setCode(newCode));
  };

  resetCode = () => {
    const { dispatch } = this.props;
    dispatch(setCode(''));
  };

  shouldShowError = () => {
    const { code, expectedCode, maxCodeLength } = this.props;
    if (code.length < maxCodeLength) return false;
    return code !== expectedCode;
  };

  shouldShowSuccess = () => {
    const { code, expectedCode } = this.props;
    return code === expectedCode;
  };

  render() {
    if (this.shouldShowSuccess())
      return <SuccessView onClick={this.resetCode} />;
    if (this.shouldShowError()) return <ErrorView onClick={this.resetCode} />;

    const { code, maxCodeLength } = this.props;
    return (
      <div id="main-container">
        <div id="keyboard-container">
          <Keyboard onKeyPress={this.onKeyPress} />
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
  expectedCode: PropTypes.string.isRequired,
  maxCodeLength: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  code: makeSelectCode(),
  expectedCode: makeSelectExpectedCode(),
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
