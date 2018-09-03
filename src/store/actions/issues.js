import axios from 'axios';
import * as actions from 'Store/types';

export const setReactIssues = (data) => {
  return {
    type: actions.SET_REACT_ISSUES,
    data
  };
};

export const getReactIssues = () => {
  return async (dispatch) => {
    try {
      // get the last 30 issues by default
      // to change it have to check the properties 'open_issues_count'
      // at https://api.github.com/repos/facebook/react
      // and work with the params page and per_page in the default api
      const url = 'https://api.github.com/repos/facebook/react/issues';
      const response = await axios.get(url);
      const { data } = response;
      const formattedData = data.map((issue) => {
        const {
          number, title, created_at: createdAt, updated_at: updatedAt, labels, state, html_url: htmlUrl
        } = issue;
        const fotmattedLabels = labels.map(({ color, name }) => {
          return {
            color,
            name
          };
        });
        return {
          number, title, createdAt, updatedAt, labels: fotmattedLabels, state, htmlUrl
        };
      });

      return dispatch(setReactIssues(formattedData));
    } catch (error) {
      // console.log('error', error)
      return null;
    }
  };
};
