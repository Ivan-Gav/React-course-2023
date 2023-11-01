import { Component } from 'react';

class Fallback extends Component {
  render() {
    return (
      <>
        <h1>This is your ERROR bro!</h1>
        <button type="button" onClick={() => window.location.reload()}>
          Reload page
        </button>
      </>
    );
  }
}

export default Fallback;
