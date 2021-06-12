import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import apiCalls from '../../utilities/apiCalls';
import utils from '../../utilities/utils';
import locationData from '../../datasets/locations';
import Entry from '../EntryPage/Entry';
import Main from '../MainPage/Main';
import Results from '../ResultsPage/Results';

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
      dataLoaded: false,
    }
  }

  componentDidUpdate = () => {
    if (this.state.dataLoaded === false && this.state.category.length > 0) {
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

  assignLocation = (selection) => {
    if (selection) {
      this.setState({ currentLocation: selection });
    }
  }

  assignCategory = (selection) => {
    console.log("CATEGORY SELECTED: ", selection);
    this.setState({ category: selection });
  }

  assignDataLoadState = (bool) => {
    this.setState({ dataLoaded: bool });
  }

  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Entry 
                locations={this.state.locations} 
                assignLocation={this.assignLocation}
              />
            </Route>
            <Route exact path='/home/:id' 
                  render={({ match }) => 
              <Main 
                location={match.params.id}
              /> 
            }>
            </Route>
            <Route 
              exact path={`/location/:location/category/:id`}
              render={({ match }) => 
                <Results
                  location={utils.revertLocationName(match.params.location)}
                  category={match.params.id}
                  categoryData={this.state[this.state.category]}
                  assignCategory={this.assignCategory}
                  assignDataLoadState={this.assignDataLoadState}
                />
            }>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  };

};

export default App;
