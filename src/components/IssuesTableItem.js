import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

const IssuesTableItem = ({ issue }) => {
  const {
    number, title, createdAt, updatedAt, renderLabels, state, htmlUrl
  } = issue;
  // console.log('htmlUrl', htmlUrl);
  // console.log('issue', issue);
  return (
    <Fragment>
      <Table.Cell>
        <a
          href={htmlUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {number}
        </a>
      </Table.Cell>
      <Table.Cell>{title}</Table.Cell>
      <Table.Cell>{createdAt}</Table.Cell>
      <Table.Cell>{updatedAt}</Table.Cell>
      <Table.Cell>{renderLabels}</Table.Cell>
      <Table.Cell>{state}</Table.Cell>
    </Fragment>
  );
};

IssuesTableItem.propTypes = {
  issue: PropTypes.object.isRequired
};

export default IssuesTableItem;
