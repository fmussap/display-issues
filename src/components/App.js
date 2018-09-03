import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SearchIssues from 'Components/SearchIssues';
import IssuesTable from 'Components/IssuesTable';
import IssuesPagination from 'Components/IssuesPagination';
import filterList from 'Utils/filterList';
import * as actions from 'Store/actions/';

import 'semantic-ui-css/semantic.min.css';
import 'Styles/components/App.css';

class App extends Component {
  state = {
    activePage: 1,
    issuesList: [],
    pagination: 10,
    pageContent: [],
    totalPages: 0
  }

  componentDidMount() {
    const { getReactIssues } = this.props;
    getReactIssues();
  }

  componentWillReceiveProps(nextProps) {
    const { issues } = this.props;
    const { activePage, pagination } = this.state;

    if (issues !== nextProps.issues) {
      const totalPages = Math.ceil(nextProps.issues.length / pagination);
      this.setState(() => ({
        issuesList: nextProps.issues,
        pageContent: nextProps.issues.slice((activePage - 1) * pagination, activePage * pagination),
        totalPages
      }));
    }
  }

  handleSearch = (value) => {
    const { issues } = this.props;
    const filteredList = filterList(value, issues);
    const { activePage, pagination } = this.state;
    const totalPages = Math.ceil(filteredList.length / pagination);

    this.setState(() => ({
      activePage: 1,
      issuesList: [...filteredList],
      pageContent: filteredList.slice((activePage - 1) * pagination, activePage * pagination),
      totalPages
    }));
  }

  handleActivePage = (value) => {
    const { issuesList, pagination } = this.state;
    const pageContent = issuesList.slice((value - 1) * pagination, value * pagination);
    this.setState(() => ({
      activePage: value,
      pageContent
    }));
  }

  renderPagination = () => {
    const { activePage, totalPages } = this.state;
    if (totalPages > 0) {
      return (
        <IssuesPagination
          activePage={activePage}
          totalPages={totalPages}
          handleActivePage={this.handleActivePage}
        />
      );
    }

    return null;
  }

  render() {
    const { pageContent } = this.state;
    return (
      <div className="container">
        <SearchIssues handleSearch={this.handleSearch} />
        <IssuesTable issues={pageContent} />
        {this.renderPagination()}
      </div>
    );
  }
}

const mapStateToProps = ({ issues }) => ({
  issues: issues.reactIssues
});

App.defaultProps = {
  issues: []
};

App.propTypes = {
  getReactIssues: PropTypes.func.isRequired,
  issues: PropTypes.array
};

export default connect(mapStateToProps, actions)(App);
