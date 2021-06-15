import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter as Router, Switch } from "react-router-dom";
import { fetchDataByCategory } from '../../utilities/apiCalls';
import utils from '../../utilities/utils';
import locationData from '../../datasets/locations';
import Entry from '../EntryPage/Entry';
import Main from '../MainPage/Main';
import Results from '../ResultsPage/Results';
import Card from '../Card/Card';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';

class App extends Component {
  constructor() {
    super()
    this.state = {
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
      isLoading: false,
      isRandom: false,
      hasErrored: false,
      error: '',
    }
  }

  componentDidMount = () => {
    this.setState({ isLoading: false });
  }

  componentDidUpdate = (prevState, prevProps) => {
    if (prevProps.category !== this.state.category) {
      this.getDataByCategory(this.state.category);
      this.setState({ isLoading: true })
    }
    if (this.state.dataLoaded && !this.state.itemsFiltered) {
      this.determineFilter();
    }
    if (this.state.itemsFiltered && !this.state.cardsBuilt) {
      this.buildItemCards();
    }
    if (this.state.cardsBuilt && this.state.isLoading) {
      this.setState({ isLoading: false });
    }
  };

  assignLocation = (selection) => {
    if (selection) {
      this.setState({ currentLocation: selection });
      this.resetItemData();
    }
  }

  assignCategory = (selection) => {
    this.setState({ category: selection });
  }

  assignDataLoadState = (bool) => {
    this.setState({ dataLoaded: bool });
  }

  activateRandomState = () => {
    this.setState({ isRandom: true})
  }

  getDataByCategory = () => {
    fetchDataByCategory(this.state.category)
      .then(data => {
        this.setState({ categoryData: data.data })
      })
      .then(() => {
        this.setState({ dataLoaded: true, hasErrored: false })
      })
      .catch((error) => {
        console.log(error);
        this.setState({ hasErrored: true, error: 'Uh Oh, Something Went Wrong' });
      })
  };

  determineFilter = () => {
    if (this.state.category === 'creatures') {
      this.filterCreatures();
    } else {
      this.filterItems();
    }
  }

  filterCreatures = () => {
    const keys = Object.keys(this.state.categoryData);
    keys.forEach(key => {
      this.state.categoryData[key].forEach(elem => {
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
    })
    this.setState({ itemsFiltered: true });
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
      } else if (elem.category === 'treasure') {
          this.setState(prevState => ({
          ...prevState,
          localItems: [...prevState.localItems, elem],
        }))
      }
    })

    // if (this.state.localItems.length === 0 && this.state.backupItems.length === 0) {
    //   this.buildBackupItems();
    // }

    this.setState({ itemsFiltered: true });
  }

  buildBackupItems = () => {
    console.log("BUILD BACKUPS");
    // do {
    //   const item = utils.getRandomElement(this.state.categoryData);
    //   this.setState(prevState => ({
    //     ...prevState,
    //     backupItems: [...prevState.backupItems, item],
    //   }))
    // } while (this.state.backupItems.length < 10);
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
      this.setState({ cardsBuilt: true, isLoading: false })
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

  resetItemData = () => {
    this.setState({ 
      categoryData: [],
      localItems: [],
      backupItems: [],
      itemCards: [],
      error: '',
      dataLoaded: false,
      itemsFiltered: false,
      usingBackup: false,
      cardsBuilt: false,
      isRandom: false,
      isLoading: false,
      hasErrored: false,
    });
  }

  evaluateLocationPath = (match) => {
    const isLocation = this.state.locations.find(location => 
      location === utils.revertLocationName(match.params.id));
    return isLocation ? (
      <Main 
        location={match.params.id}
        assignLocation={this.assignLocation}
        assignCategory={this.assignCategory}
        resetData={this.resetData}
        activateRandomState={this.activateRandomState}
      />
    ) : (
      <Redirect to='/'/>
    )
  }

  render() {

    return (
      <div className='app'>
        {this.state.hasErrored && 
          <Error error={this.state.error} resetItemData={this.resetItemData}/>}

        {this.state.isLoading && <Loading />}

        {!this.state.hasErrored && 
          <Router>
            <Switch>
              <Route exact path='/home/:id' 
                render={({ match }) => this.evaluateLocationPath(match)}>
              </Route>
              <Route 
                exact path='/location/:location/category/:id'
                render={({ match }) => 
                  <Results
                    location={utils.revertLocationName(match.params.location)}
                    category={match.params.id}
                    itemCards={this.state.itemCards}
                    assignCategory={this.assignCategory}
                    assignLocation={this.assignLocation}
                    error={this.state.error}
                    resetData={this.resetItemData}
                    usingBackup={this.state.usingBackup}
                    hasErrored={this.state.hasErrored}
                    isLoading={this.state.isLoading}
                    isRandom={this.state.isRandom}
                  />
              }>
              </Route>
              <Route path='/'>
                <Entry 
                  locations={this.state.locations} 
                  assignLocation={this.assignLocation}
                  resetItemData={this.resetItemData}
                />
              </Route>
              <Route path='/*' render={() => 
                <Error 
                  error={this.state.error}
                  resetItemData={this.resetItemData}/>} 
              />
            </Switch>
          </Router>
        }
      </div>
    );
  };

};

export default App;
