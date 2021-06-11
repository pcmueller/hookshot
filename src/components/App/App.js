import React, { useEffect, useContext, useReducer } from 'react';
import AppContext from './AppContext';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import apiCalls from '../../utilities/apiCalls';
import locationData from '../../datasets/locations';
import Entry from '../EntryPage/Entry';
import Main from '../MainPage/Main';

const initalState = {
  locations: locationData,
  currentLocation: '',
  enterClicked: false,
  allData: {},
  category: '',
  categoryData: '',
  item: '',
  error: '',
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_LOCATION':
      return { currentLocation: action.location };
    case 'ENTER_CLICKED':
      return { enterClicked: action.enterClicked}
    case 'SET_CATEGORY':
      return { category: action.category };
    case 'ASSIGN_ALL_DATA':
      return { allData: action.allData }
    case 'ASSIGN_CATEGORY_DATA':
      return { [action.type]: action.categoryData }
    case 'HAS_ERRORED':
      return { error: action.error}
    default:
      return state;
  }
}


function App() {
  
  const [state, dispatch] = useReducer(reducer, initalState);
  const context = useContext(AppContext);

  // componentDidMount = () => {
  //   // this.setState({ category: 'monsters'});
  //   this.getAllData();
  // };

  // componentDidUpdate = () => {
  //   if (this.state.category.length > 0) {
  //     this.getDataByCategory(`${this.state.category}`);
  //   }
  // };

  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
  }, [state.enterClicked]);

  // const assignLocation = () => {
  //   const action = { type: 'SET_LOCATION' }
  //   dispatch(action)
  // }

  const getAllData = () => {
    apiCalls.fetchAllData()
      .then(data => {
        const allData = data.data;
        dispatch({ type: 'ASSIGN_ALL_DATA', allData })
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: 'HAS_ERRORED', error });
      })
  }

  const getDataByCategory = (category) => {
    apiCalls.fetchDataByCategory(category)
      .then(data => {
        const categoryData = data.data;
        dispatch({ type: [category], categoryData })
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: 'HAS_ERRORED', error });
      })
  };

  // assignLocation = (selection) => {
  //   if (selection) {
  //     this.setState({ currentLocation: selection });
  //   }
  // }

  // const handleGoalClick = (e) => {
  //   this.setState({ category: e.target.id });
  // }

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <div className='app'>
        <Router>
          <Switch>
            <Route exact path='/home/:id' render={({ match }) => 
              <Main 
                location={match.params.id}
                // handleClick={this.handleGoalClick}
              /> 
            }>
            </Route>
            <Route exact path='/'>
              <Entry 
                // locations={this.state.locations} 
                // assignLocation={assignLocation}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    </AppContext.Provider>
  );
};

export default App;
