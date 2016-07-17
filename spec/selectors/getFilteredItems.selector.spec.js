import { getFilteredItems } from '../../src/selectors/selectors';

const state = {
  currentFilter: 'test',
  postsByReddit: {
    angularjs: {
      items: [
        {
          title: 'test1'
        },
        {
          title: '2test'
        },
        {
          title: 'tes t'
        }
      ]
    }
  },
  selectedReddit: 'angularjs'
}

const expectedFilter = [{
    title: 'test1'
  },
  {
    title: '2test'
  }
];

describe('getFilteredItems', function() {
  it('should filter items before selected reddit response', function() {
    const state = {
      currentFilter: 'test',
      postsByReddit: {}
    };

    getFilteredItems(state).should.eql([]);
  });

  it('should filter items', function() {
    getFilteredItems(state).should.eql(expectedFilter);
  });

  it('should return empty array for unexisting filter', function() {
    const newState = Object.assign({}, state, {currentFilter: 'asdf'});

    getFilteredItems(newState).should.eql([]);
  });

  it('should ignore case', function() {
    const newState = Object.assign({}, state, {currentFilter: 'TEST'});

    getFilteredItems(newState).should.eql(expectedFilter);
  });

  it('should cache response for the same state', function() {
    getFilteredItems(state).should.equal(getFilteredItems(state));
  });
});
