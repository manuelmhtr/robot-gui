import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the main state domain
 */

const selectMainDomain = state => state.get('main', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Main
 */

const makeSelectCode = () =>
  createSelector(selectMainDomain, substate => substate.toJS().code);

const makeSelectExpectedCode = () =>
  createSelector(selectMainDomain, substate => substate.toJS().expectedCode);

const makeSelectMaxCodeLength = () =>
  createSelector(selectMainDomain, substate => substate.toJS().maxCodeLength);

export {
  selectMainDomain,
  makeSelectCode,
  makeSelectMaxCodeLength,
  makeSelectExpectedCode,
};
