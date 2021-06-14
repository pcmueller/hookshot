import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import utils from '../../utilities/utils';
// import PropTypes from 'prop-types';

const Header = ({ pageName, resetData, location }) => {

  const [ pageHeader, setPageHeader ] = useState('');

  useEffect(() => {
    setPageHeader(assignHeader());
  }, [pageName]);

  const assignHeader = () => {
    switch (pageName) {
      case 'entry': 
        return (
          <header className='banner'>
            <Link to={'/'} onClick={resetData}>
              <h1 className='app-title' id='app-title'>HOOKSHOT</h1>
            </Link>
            <h2 className='app-subtitle'>
              ~ A FIELD GUIDE FOR HYRULIAN EXPLORERS ~
            </h2>
          </header>
        );
      case 'main': 
        return (
          <header className='banner' onMouseOver={utils.addShimmerEffect}>
            <Link to={'/'} onClick={resetData}>
              <h1 className='welcome-message'>WELCOME TO HYRULE</h1>
            </Link>
            <div className='welcome-location'>
              <h2>current location:</h2>
              <h3>{location}</h3>
            </div>
          </header>
        );
      case 'results':
        return (
          <header className='banner' onMouseOver={utils.addShimmerEffect}>
            <Link to={'/'}>
              <h1 className='welcome-message'>WELCOME TO HYRULE</h1>
            </Link>
            <div className='welcome-location'>
              <h2>CURRENT LOCATION:</h2>
              <h3>{location}</h3>
            </div>
          </header>
        );
      default:
        break;
    }
  }

  return (
    <>
      {pageHeader}
    </>
  )
}

export default Header;

// Header.propTypes = {

// }