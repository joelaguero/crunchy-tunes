import React from 'react';
import Input from 'react-toolbox/lib/input';
import _ from 'underscore';
import ProgressBar from 'react-toolbox/lib/progress_bar';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };
    this.debouncedSearch = _.debounce(this.props.handleSearch, 150);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchText: e,
    });
    this.debouncedSearch(e);
  }

  render() {
    return (
    <span className="search-bar form-inline" style={{ display: 'inline-flex' }}>
      <Input type="text"
        style={{ width: '500px' }}
        label="Search SoundCloud for some Crunchy Tunes!"
        onChange={this.handleChange}
        value ={this.state.searchText}
      />
      { this.props.searching ?
          <ProgressBar
            type="circular"
            mode="indeterminate"
            multicolor
          />
      : null}
    </span>
    );
  }
}

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired,
  searching: React.PropTypes.bool.isRequired,
};

export default Search;
