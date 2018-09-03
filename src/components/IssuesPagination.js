import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'semantic-ui-react';

class IssuesPagination extends Component {
  state = { activePage: 1 };

  componentWillReceiveProps(nextProps) {
    const { activePage } = this.state;

    if (activePage !== nextProps.activePage) {
      this.setState(() => ({
        activePage: nextProps.activePage
      }));
    }
  }

  handlePaginationChange = (e, { activePage }) => {
    const { handleActivePage } = this.props;
    this.setState(() => ({
      activePage
    }), () => handleActivePage(activePage));
  }

  render() {
    const { totalPages } = this.props;
    const { activePage } = this.state;
    return (
      <Pagination
        activePage={activePage}
        onPageChange={this.handlePaginationChange}
        totalPages={totalPages}
      />
    );
  }
}

IssuesPagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  handleActivePage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired
};

export default IssuesPagination;
