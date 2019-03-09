/**
 *
 * SuccessView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import StatusPage from 'components/StatusPage';
import messages from './messages';

const SUCCESS_COLOR = '#10cc29';

/* eslint-disable react/prefer-stateless-function */
export class SuccessView extends React.Component {
  render() {
    return (
      <StatusPage
        icon={faCheckCircle}
        iconColor={SUCCESS_COLOR}
        title={messages.title}
        callToActionText={messages.callToAction}
        onCallToActionClick={this.props.onClick}
      />
    );
  }
}

SuccessView.propTypes = {
  onClick: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(SuccessView);
