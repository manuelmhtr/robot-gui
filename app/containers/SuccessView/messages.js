/*
 * SuccessView Messages
 *
 * This contains all the text for the SuccessView container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.SuccessView';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Good! You can pick your stuff now',
  },
  callToAction: {
    id: `${scope}.callToAction`,
    defaultMessage: 'Thanks for using our service',
  },
});
