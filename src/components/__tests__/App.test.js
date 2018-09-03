import React from 'react';
import { mount } from 'enzyme';

import App from 'Components/App';
import IssuesTable from 'Components/IssuesTable';
import SearchIssues from 'Components/SearchIssues';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Root><App /></Root>);
});

afterEach(() => {
  wrapped.unmount();
});

test('Has a SearchIssues component', () => {
  expect(wrapped.find(SearchIssues).length).toEqual(1);
});

test('Has a IssuesTable component', () => {
  expect(wrapped.find(IssuesTable).length).toEqual(1);
});
