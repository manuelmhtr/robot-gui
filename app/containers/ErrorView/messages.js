/*
 * ErrorView Messages
 *
 * This contains all the text for the ErrorView container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ErrorView';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Incorrect code',
  },
  callToAction: {
    id: `${scope}.callToAction`,
    defaultMessage: 'Try again',
  },
});
