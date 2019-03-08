/*
 * InputDisplay Messages
 *
 * This contains all the text for the InputDisplay container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.InputDisplay';

export default defineMessages({
  inputDisplayTitle: {
    id: `${scope}.inputDisplayTitle`,
    defaultMessage: 'Enter code to unlock:',
  },
});
