import React, { Component } from 'react';
import apiCalls from '../../utilities/apiCalls';
import Entry from '../EntryPage/Entry';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allData: {},
      locations: [],
      currentLocation: '',
      category: '',
      item: '',
      error: '',
    }
  }

  componentDidMount = () => {
    apiCalls.fetchAllData()
      .then(data => {
        this.setState({ allData: data })
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: 'Uh Oh, Something Went Wrong' });
      })
  };

  getDataByCategory = () => {
    const category = this.state.category;
    apiCalls.fetchDataByCategory(category)
      .then(data => {
        this.setState({ [category]: data })
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: 'Uh Oh, Something Went Wrong' });
      })
  };

  getLocations = () => {
    const filtered = this.state.allData.reduce((acc, obj) => {

    });
  };

  render() {
    return (
      <div className='app'>
        <Entry locations={this.state.locations} />
      </div>
    );
  };

};

export default App;
