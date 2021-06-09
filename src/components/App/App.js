import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      location: '',
      category: '',
      item: '',
    }
  }

  render() {
    return (
      <div className='app'>
        <header className='header'>
          <h1 className='title'>HOOKSHOT</h1>
          
        </header>
      </div>
    );
  }
}

export default App;
