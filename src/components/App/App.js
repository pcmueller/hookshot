import React, { Component } from 'react';
import apiCalls from '../../utilities/apiCalls';
import Entry from '../EntryPage/Entry';
import Main from '../MainPage/Main';

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
    this.setState({ category: 'monsters'});
    this.getAllData();
  };

  componentDidUpdate = () => {
    if (this.state.category.length > 0) {
      this.getDataByCategory(`${this.state.category}`);
    }
  };

  getAllData = () => {
    apiCalls.fetchAllData()
      .then(data => {
        this.setState({ allData: data.data })
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: 'Uh Oh, Something Went Wrong' });
      })
  }

  getDataByCategory = (category) => {
    apiCalls.fetchDataByCategory(category)
      .then(data => {
        this.setState({ [category]: data.data })
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: 'Uh Oh, Something Went Wrong' });
      })
  };

  handleGoalClick = (e) => {
    this.setState({ category: e.target.id });

    console.log(e.target.id);
  }

  getLocations = () => {
    const filtered = this.state.allData.reduce((acc, obj) => {

    });
  };

  render() {
    return (
      <div className='app'>
        {/* <Entry locations={this.state.locations}/> */}
        <Main handleClick={ this.handleGoalClick }/>
      </div>
    );
  };

};

export default App;
