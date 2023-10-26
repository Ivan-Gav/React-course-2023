import { Component } from 'react';

class Search extends Component {
  state = {
    query: '',
  };

  handleInput = (value: string) => {
    this.setState({
      query: value,
    });
  };

  handleSubmit = () => {
    alert(this.state.query);
  };

  render() {
    return (
      <div>
        <h2>Search field</h2>
        <form onSubmit={() => this.handleSubmit()}>
          <input
            type="text"
            // className={s.searchInput}
            placeholder="Enter search query"
            value={this.state.query}
            onChange={(e) => this.handleInput(e.target.value)}
          />
          <button
            type="submit"
            // className=''
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
