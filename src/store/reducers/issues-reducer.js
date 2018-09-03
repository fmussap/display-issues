import * as actions from 'Store/types';

const INITIAL_STATE = [];

const issuesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.SET_REACT_ISSUES:
      return {
        ...state,
        reactIssues: action.data
      };
    default:
      return state;
  }
};

export default issuesReducer;
