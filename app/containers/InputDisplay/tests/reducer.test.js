import { fromJS } from 'immutable';
import inputDisplayReducer from '../reducer';

describe('inputDisplayReducer', () => {
  it('returns the initial state', () => {
    expect(inputDisplayReducer(undefined, {})).toEqual(fromJS({}));
  });
});
