import { setReactIssues } from 'Store/actions';
import * as actions from 'Store/types';

const data = [
  {
    createdAt: '2018-09-03T01:56:48Z',
    number: 13537,
    labels: [
      {
        color: 'e7e7e7',
        name: 'CLA Signed'
      }
    ],
    state: 'open',
    title: 'Ignore noscript content on the client',
    updatedAt: '2018-09-03T02:53:21Z'
  }
];

describe('setReactIssues', () => {
  test('has the correct type', () => {
    const action = setReactIssues();
    expect(action.type).toEqual(actions.SET_REACT_ISSUES);
    expect(action.type).not.toEqual(actions.SET_SEARCH_LIST);
  });

  test('has the correct payload', () => {
    const action = setReactIssues(data);

    expect(action.data).toEqual(data);
  });
});
