import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import apiCalls from '../../utilities/apiCalls';
import utils from '../../utilities/utils';
import locationData from '../../datasets/locations';
import Entry from '../EntryPage/Entry';
import Main from '../MainPage/Main';
import Results from '../ResultsPage/Results';
import Card from '../Card/Card';
import Error from '../Error/Error'

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
      itemsFiltered: false,
      dataLoaded: false,
      hasErrored: false,
      error: '',
    }
  }

  componentDidUpdate = (prevState) => {
    if (prevState.dataLoaded !== this.state.dataLoaded) {
      this.filterItems()
        .then(() => {
          this.setState({ itemsFiltered: true })
        })
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
    console.log("CATEGORY SELECTED: ", selection);
    this.setState({ category: selection });
  }

  retrieveCategoryData = () => {
    console.log("GETTING CATEGORY DATA");
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
  }

  addItemCard = (item) => {
    item.length > 0 ? 
      this.setState(prevState => ({...prevState,
        itemCards: 
          [...prevState.itemCards, 
            <Card item={item} key={item.id} id={item.id} /> 
          ],
        }))
    :
      this.state.itemCards.forEach(card => {
        if (item.id !== card.id) {
          this.setState(prevState => ({...prevState,
            itemCards: 
              [...prevState.itemCards, 
                <Card item={item} key={item.id} id={item.id} /> 
              ],
          }))
        }
      });
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
                /> 
              }>
              </Route>
              <Route 
                exact path={`/location/:location/category/:id`}
                render={({ match }) => 
                  <Results
                    location={utils.revertLocationName(match.params.location)}
                    category={match.params.id}
                    categoryData={this.state.categoryData}
                    localItems={this.state.localItems}
                    backupItems={this.state.backupItems}
                    itemCards={this.state.itemCards}
                    dataLoaded={this.state.dataLoaded}
                    itemsFiltered={this.state.itemsFiltered}
                    assignCategory={this.assignCategory}
                    retrieveCategoryData={this.retrieveCategoryData}
                    assignDataLoadState={this.assignDataLoadState}
                    filterItems={this.filterItems}
                    addItemCard={this.addItemCard}
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
