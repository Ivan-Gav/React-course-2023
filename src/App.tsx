import { Component } from 'react';
import Content from './components/Content/Content';
import Search from './components/Search/Search';

class App extends Component {
  state = {
    query: localStorage.getItem('searchQuery') || '',
  };

  handleSearch = (data: string) => {
    this.setState({
      query: data,
    });
    localStorage.setItem('searchQuery', data);
  };

  render() {
    return (
      <>
        <Search onSubmit={this.handleSearch} query={this.state.query} />
        <hr />
        <Content query={this.state.query} />
      </>
    );
  }
}

export default App;
