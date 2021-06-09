import React, { Component } from 'react';
import fetchData from '../../utilities/apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allData: '',
      location: '',
      category: '',
      item: '',
      error: '',
    }
  }

  componentDidMount() {
    fetchData()
      .then(data => {
        this.setState({ allData: data })
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: 'Uh Oh, Something Went Wrong' });
      })
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
