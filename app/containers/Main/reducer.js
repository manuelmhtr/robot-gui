/*
 *
 * Main reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_CODE, MAX_CODE_LENGTH, EXPECTED_CODE } from './constants';

export const initialState = fromJS({
  code: '',
  maxCodeLength: MAX_CODE_LENGTH,
  expectedCode: EXPECTED_CODE,
});

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CODE:
      return state.set('code', action.code);
    default:
      return state;
  }
}

export default mainReducer;
