import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class SearchIssues extends Component {
  state = {
    search: ''
  }

  onChange = ({ target }) => {
    const { handleSearch } = this.props;
    const newValue = target.value;

    this.setState(() => ({
      search: newValue
    }), () => handleSearch(newValue.trim()));
  };

  render() {
    const { search } = this.state;
    return (
      <Input
        action={{ icon: 'search' }}
        placeholder="Search by Title..."
        onChange={this.onChange}
        value={search}
      />
    );
  }
}

SearchIssues.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default SearchIssues;
