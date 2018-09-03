import React from 'react';
import { mount } from 'enzyme';

import IssuesPagination from 'Components/IssuesPagination';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <IssuesPagination
      activePage={1}
      totalPages={3}
      handleActivePage={() => null}
    />
  );
});

afterEach(() => {
  wrapped.unmount();
});

test('Has 7 a elements', () => {
  expect(wrapped.find('a').length).toEqual(7);
  expect(wrapped.find('a').length).not.toEqual(6);
});

test('It row shows the right text', () => {
  expect(wrapped.render().text()).toContain('1');
  expect(wrapped.render().text()).toContain('2');
  expect(wrapped.render().text()).toContain('3');
  expect(wrapped.render().text()).toContain('«');
  expect(wrapped.render().text()).toContain('⟩');
  expect(wrapped.render().text()).not.toContain('4');
});
