/**
 *
 * InputDisplay
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import Title from 'components/Title';
import CodeDisplay from 'components/CodeDisplay';
import injectReducer from 'utils/injectReducer';
import makeSelectInputDisplay from './selectors';
import reducer from './reducer';
import messages from './messages';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/* eslint-disable react/prefer-stateless-function */
export class InputDisplay extends React.Component {
  render() {
    const { code, maxCodeLength } = this.props;
    return (
      <Container>
        <Title text={messages.inputDisplayTitle} />
        <CodeDisplay code={code} maxLength={maxCodeLength} />
      </Container>
    );
  }
}

InputDisplay.propTypes = {
  code: PropTypes.string.isRequired,
  maxCodeLength: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  inputDisplay: makeSelectInputDisplay(),
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

const withReducer = injectReducer({ key: 'inputDisplay', reducer });

export default compose(
  withReducer,
  withConnect,
)(InputDisplay);
