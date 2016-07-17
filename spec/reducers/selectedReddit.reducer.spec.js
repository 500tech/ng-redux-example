import { selectedReddit } from '../../src/reducers/reducers';
import {
  SELECT_REDDIT
} from '../../src/constants/ActionTypes';

describe('selectedReddit reducer', function() {
  it('should set initial state to angularjs', function() {
    selectedReddit(undefined, {}).should.equal('angularjs')
  });

  it('should ignore unknown action', function() {
    const state = {};

    selectedReddit(state, {type: 'UNKOWN ACTION'}).should.equal(state);
  });

  it('should set selected reddit', function() {
    const state = 'angularjs';
    const action = {type: SELECT_REDDIT, reddit: 'react'};

    selectedReddit(state, action).should.equal('react');
  });  
});
