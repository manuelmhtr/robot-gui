/**
 *
 * StatusPage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from '../Title';

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ededed;
`;

const IconContainer = styled.div`
  font-size: 100px;
  margin-top: -100px;
`;

const TitleContainer = styled.div`
  color: #000;
`;

const CallToActionContainer = styled.div`
  margin-top: 30px;
`;

const CallToAction = styled.div`
  font-size: 20px;
  text-decoration: underline;
`;

/* eslint-disable react/prefer-stateless-function */
class StatusPage extends React.Component {
  render() {
    const { title, callToActionText, icon, iconColor } = this.props;
    const iconStyle = {
      color: iconColor,
    };

    return (
      <MainContainer>
        <IconContainer>
          <FontAwesomeIcon icon={icon} style={iconStyle} />
        </IconContainer>
        <TitleContainer>
          <Title text={title} />
        </TitleContainer>
        <CallToActionContainer>
          <CallToAction onClick={this.props.onCallToActionClick}>
            <FormattedMessage {...callToActionText} />
          </CallToAction>
        </CallToActionContainer>
      </MainContainer>
    );
  }
}

StatusPage.propTypes = {
  icon: PropTypes.object,
  iconColor: PropTypes.string,
  title: PropTypes.object.isRequired,
  callToActionText: PropTypes.object,
  onCallToActionClick: PropTypes.func,
};

export default StatusPage;
