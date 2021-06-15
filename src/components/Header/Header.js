import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import utils from '../../utilities/utils';

const Header = ({ pageName, location, resetItemData }) => {

  const [ pageHeader, setPageHeader ] = useState('');

  useEffect(() => {
    setPageHeader(assignHeader());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageName]);

  const assignHeader = () => {
    switch (pageName) {
      case 'entry': 
        return (
          <header className='banner'>
            <Link to={'/'} onClick={resetItemData}>
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
            <Link to={'/'} onClick={resetItemData}>
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
              <h2>current location:</h2>
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

Header.propTypes = {
  pageName: PropTypes.string,
  location: PropTypes.string,
  resetItemData: PropTypes.func
}