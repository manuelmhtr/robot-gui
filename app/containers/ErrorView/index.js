/**
 *
 * ErrorView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import StatusPage from 'components/StatusPage';
import messages from './messages';

const DANGER_COLOR = '#ff0706';

/* eslint-disable react/prefer-stateless-function */
export class ErrorView extends React.Component {
  render() {
    return (
      <StatusPage
        icon={faTimesCircle}
        iconColor={DANGER_COLOR}
        title={messages.title}
        callToActionText={messages.callToAction}
        onCallToActionClick={this.props.onClick}
      />
    );
  }
}

ErrorView.propTypes = {
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

export default compose(withConnect)(ErrorView);
