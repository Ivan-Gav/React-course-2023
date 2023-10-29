import { Component, FormEvent } from 'react';

type SearchState = {
  query?: string;
  hasError: boolean;
};

type SearchProps = {
  onSubmit: (s: string) => void;
};

class Search extends Component<SearchProps, SearchState> {
  state = {
    query: localStorage.getItem('searchQuery') || '',
    hasError: false,
  };

  private handleInput = (value: string) => {
    this.setState({
      query: value,
    });
  };

  private handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    localStorage.setItem('searchQuery', this.state.query);
  };

  private clearSearch = () => {
    this.setState({
      query: '',
    });
    localStorage.removeItem('searchQuery');
  };

  componentDidUpdate() {
    if (this.state.hasError) {
      throw new Error('I will kill your app!');
    }
  }

  render() {
    return (
      <div>
        <h2>Search field</h2>
        <form name="searchform" onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="Enter search query"
            value={this.state.query}
            onChange={(e) => this.handleInput(e.target.value)}
          />
          <button type="submit">Search</button>
          <button type="button" onClick={() => this.clearSearch()}>
            Clear
          </button>
          <button
            type="button"
            onClick={() => {
              this.setState({ hasError: true });
            }}
          >
            Test Error
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
