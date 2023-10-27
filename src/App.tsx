import { Component } from 'react';
import Content from './components/Content/Content';
import Search from './components/Search/Search';

class App extends Component {
  state = {
    query: '',
  };

  handleSearch = (data: string) => {
    this.setState({
      query: data,
    });
    console.log(data);
  };

  render() {
    return (
      <>
        <Search onSubmit={this.handleSearch} />
        <hr />
        <Content query={this.state.query} />
      </>
    );
  }
}

export default App;
