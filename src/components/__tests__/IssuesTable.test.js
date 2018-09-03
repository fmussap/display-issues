import React from 'react';
import { mount } from 'enzyme';

import IssuesTable from 'Components/IssuesTable';

let wrapped;

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

beforeEach(() => {
  wrapped = mount(<IssuesTable issues={data} />);
});

test('Has 6 td element', () => {
  expect(wrapped.find('td').length).toEqual(6);
  expect(wrapped.find('td').length).not.toEqual(1);
});

test('It row shows the right text', () => {
  expect(wrapped.render().text()).toContain(data[0].number);
  expect(wrapped.render().text()).toContain(data[0].title);
  expect(wrapped.render().text()).not.toContain('xxxx');
});
