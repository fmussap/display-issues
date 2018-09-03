import issuesReducer from 'Store/reducers/issues-reducer';
import * as actions from 'Store/types';

let INITIAL_STATE;

const data = [
  {
    createdAt: 'September 2nd 2018',
    number: 13537,
    renderLabels: [
      {
        color: 'e7e7e7',
        name: 'CLA Signed'
      }
    ],
    state: 'open',
    title: 'Ignore noscript content on the client',
    updatedAt: 'September 2nd 2018'
  }
];

beforeEach(() => {
  INITIAL_STATE = [];
});

test('Handle action SET_REACT_ISSUES', () => {
  const action = {
    type: actions.SET_REACT_ISSUES,
    data
  };

  const state = {
    ...INITIAL_STATE,
    reactIssues: data
  };

  const newState = issuesReducer(INITIAL_STATE, action);
  expect(state).toEqual(newState);
});
