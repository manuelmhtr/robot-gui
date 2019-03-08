/*
 *
 * Main actions
 *
 */

import { SET_CODE } from './constants';

export function setCode(code) {
  return {
    code,
    type: SET_CODE,
  };
}
