import { Component, FormEvent } from 'react';

type SearchProps = {
  query?: string;
  onSubmit: (s: string) => void;
};

class Search extends Component<SearchProps> {
  state = {
    query: localStorage.getItem('searchQuery') || '',
  };

  private handleInput = (value: string) => {
    this.setState({
      query: value,
    });
  };

  private handleSubmit = (e: FormEvent) => {
    // alert(this.state.query);
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

  render() {
    return (
      <div>
        <h2>Search field</h2>
        <form name="searchform" onSubmit={(e) => this.handleSubmit(e)}>
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
          <button
            type="button"
            onClick={() => this.clearSearch()}
            // className=''
          >
            Clear
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
