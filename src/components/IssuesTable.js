import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import moment from 'moment';


import IssuesTableItem from 'Components/IssuesTableItem';
import 'Styles/components/issues-table.css';

class IssuesTable extends Component {
  renderIssueList = () => {
    const { issues } = this.props;
    return issues.map(({
      number, title, createdAt, updatedAt, labels, state, htmlUrl
    }) => {
      const renderLabels = labels.map(({ color, name }) => {
        return (
          <div className="table-item" style={{ backgroundColor: `#${color}` }} key={name}>{name}</div>
        );
      });
      const formattedCreatedAt = moment(createdAt).format('MMMM Do YYYY');
      const formattedUpdatedAt = moment(updatedAt).format('MMMM Do YYYY');
      const issue = {
        number,
        title,
        createdAt: formattedCreatedAt,
        updatedAt: formattedUpdatedAt,
        renderLabels,
        state,
        htmlUrl
      };
      return (
        <Table.Row key={number}>
          <IssuesTableItem issue={issue} />
        </Table.Row>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <Table celled selectable striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Issue Number</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Created At</Table.HeaderCell>
              <Table.HeaderCell>Updated At</Table.HeaderCell>
              <Table.HeaderCell>Labels</Table.HeaderCell>
              <Table.HeaderCell>State</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.renderIssueList()}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

IssuesTable.defaultProps = {
  issues: []
};

IssuesTable.propTypes = {
  issues: PropTypes.array
};

export default IssuesTable;
