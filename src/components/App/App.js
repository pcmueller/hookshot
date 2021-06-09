import React, { Component } from 'react';
import fetchData from '../../utilities/apiCalls';
import Entry from '../EntryPage/Entry';

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
        <Entry></Entry>
      </div>
    );
  }
}

export default App;
