import React from 'react';
import _ from 'underscore';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };
    this.debouncedSearch = _.debounce(this.props.handleSearch, 150);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      searchText: this.refs.searchField.value,
    });
    this.debouncedSearch(this.refs.searchField.value);
  }

  render() {
    return (
    <span className="search-bar form-inline" style={{ display: 'inline-flex' }}>
      <input type="text"
        ref="searchField"
        placeholder="Search for music"
        onChange={this.handleChange}
        value ={this.state.searchText}
        id="search-input"
      />

    </span>
    );
  }
}

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired,
  searching: React.PropTypes.bool.isRequired,
};

export default Search;
