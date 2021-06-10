import React, { Component } from 'react';
import apiCalls from '../../utilities/apiCalls';
import locationData from '../../datasets/locations';
import Entry from '../EntryPage/Entry';
import Main from '../MainPage/Main';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allData: {},
      locations: locationData,
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
  }

  assignLocation = (selected) => {
    if (selected) {
      this.setState({ currentLocation: selected });
    }
  }

  render() {
    return (
      <div className='app'>
        <Entry 
          locations={this.state.locations} 
          assignLocation={this.assignLocation}
        />
        {/* <Main handleClick={ this.handleGoalClick }/> */}
      </div>
    );
  };

};

export default App;
