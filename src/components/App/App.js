import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import apiCalls from '../../utilities/apiCalls';
import utils from '../../utilities/utils';
import locationData from '../../datasets/locations';
import Entry from '../EntryPage/Entry';
import Main from '../MainPage/Main';
import Results from '../ResultsPage/Results';
import Card from '../Card/Card';
import Error from '../Error/Error';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allData: {},
      locations: locationData,
      currentLocation: '',
      category: '',
      categoryData: [],
      localItems: [],
      backupItems: [],
      itemCards: [],
      dataLoaded: false,
      itemsFiltered: false,
      usingBackup: false,
      cardsBuilt: false,
      isLoading: true,
      hasErrored: false,
      error: '',
    }
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevProps.category !== this.state.category) {
      this.getDataByCategory(this.state.category);
    }
    if (this.state.dataLoaded && !this.state.itemsFiltered) {
      this.filterItems();
    }
    if (this.state.itemsFiltered && !this.state.cardsBuilt) {
      this.buildItemCards();
    }
    if (this.state.cardsBuilt && this.state.isLoading) {
      this.setState({ isLoading: false })
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

  getDataByCategory = () => {
    apiCalls.fetchDataByCategory(this.state.category)
      .then(data => {
        this.setState({ categoryData: data.data })
      })
      .then(() => {
        this.setState({ dataLoaded: true })
      })
      .catch((error) => {
        console.log(error);
        this.setState({ hasErrored: true, error: 'Uh Oh, Something Went Wrong' });
      })
  };

  assignLocation = (selection) => {
    if (selection) {
      this.setState({ currentLocation: selection });
    }
  }

  assignDataLoadState = (bool) => {
    this.setState({ dataLoaded: bool });
  }

  assignCategory = (selection) => {
    this.setState({ category: selection });
  }

  retrieveCategoryData = () => {
    this.getDataByCategory()
      .then(() => {
        this.setState({ dataLoaded: true })
      })
  }

  filterItems = () => {
    this.state.categoryData.forEach(elem => {
      if (!elem['common_locations']) {

        this.setState(prevState => ({
          ...prevState,
          backupItems: [...prevState.backupItems, elem],
        }))
      } else if (elem['common_locations'].includes(this.state.currentLocation)) {
        this.setState(prevState => ({
          ...prevState,
          localItems: [...prevState.localItems, elem],
        }))
      }
    })
    this.setState({ itemsFiltered: true });
  }

  buildItemCards = () => {
    this.state.localItems.length > 0 
    ? 
      this.useLocalItems()
    :
      this.useBackupItems()
  }
  
  useLocalItems = () => {
    this.state.localItems.forEach(item => {
      this.addItemCard(item);
    });
    if (this.state.itemCards.length === this.state.localItems.length) {
      this.setState({ cardsBuilt: true })
    }
  }

  useBackupItems = () => {
    this.setState({ usingBackup: true });
    this.state.backupItems.forEach(item => {
      this.addItemCard(item)
    });
    if (this.state.itemCards.length === this.state.backupItems.length) {
      this.setState({ cardsBuilt: true })
    }
  }

  screenDuplicates = (item) => {
    let isDuplicate = false;
    this.state.itemCards.forEach(card => {
      if (item.id === card.props.id) {
        isDuplicate = true;
      }
    });
    if (!isDuplicate) {
      this.setState(prevState => ({...prevState,
        itemCards: 
          [...prevState.itemCards, 
            <Card item={item} id={item.id} key={parseInt(item.id)} /> 
          ],
      }))
    };
  }

  addItemCard = (item) => {
    if (this.state.itemCards.length > 0) {
      this.screenDuplicates(item);
    } else {
        this.setState(prevState => ({...prevState,
          itemCards: 
            [...prevState.itemCards, 
              <Card item={item} key={item.id} id={item.id} /> 
            ],
        }))
      }
   }

  resetError = () => {
    this.setState({ hasErrored: false })
  }

  render() {

    return (
      <div className='app'>
        {this.state.hasErrored && 
          <Error error={this.state.error} resetError={this.resetError}/>}

        {!this.state.error && 
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
                  assignLocation={this.assignLocation}
                /> 
              }>
              </Route>
              <Route 
                exact path={`/location/:location/category/:id`}
                render={({ match }) => 
                  <Results
                    location={utils.revertLocationName(match.params.location)}
                    category={match.params.id}
                    itemCards={this.state.itemCards}
                    assignCategory={this.assignCategory}
                    error={this.state.error}
                    resetError={this.resetError}
                    usingBackup={this.state.usingBackup}
                    hasErrored={this.state.hasErrored}
                    isLoading={this.state.isLoading}
                  />
              }>
              </Route>
            </Switch>
          </Router>
        }
      </div>
    );
  };

};

export default App;
