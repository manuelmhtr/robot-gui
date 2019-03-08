import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the inputDisplay state domain
 */

const selectInputDisplayDomain = state =>
  state.get('inputDisplay', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by InputDisplay
 */

const makeSelectInputDisplay = () =>
  createSelector(selectInputDisplayDomain, substate => substate.toJS());

export default makeSelectInputDisplay;
export { selectInputDisplayDomain };
