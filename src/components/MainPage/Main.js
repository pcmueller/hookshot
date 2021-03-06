import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import categories from '../../utilities/categories';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';

const Main = (
  { location, 
    assignLocation, 
    assignCategory, 
    resetItemData,
    activateRandomState,
  }) => {

  const [ currentLocation, setCurrentLocation ] = useState('');
  const [ buttons, setButtons ]  = useState([]);

  useEffect(() => {
    const formatted = location.replaceAll('+', ' ');
    setCurrentLocation(formatted);
    assignLocation(formatted);
    setButtons(buildButtons());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGoalBtnClick = (e) => {
    assignCategory(e.target.id);
    if (e.target.name === 'ROLL THE DICE') {
      activateRandomState();
    }
  }

  const buildButtons = () => {
    const buttonsArr = categories.map(elem => {
      let btnClass = elem.buttonText === 'ROLL THE DICE' ? 'is-error' : 'is-primary';
      let keyName = elem.buttonText === 'ROLL THE DICE' ? 'random' : elem.name;
      return (
        <Link to={`/location/${location}/category/${elem.name}`} key={keyName}>
          <button
            id={elem.name}
            name={elem.buttonText}
            className={`goal-btn nes-btn ${btnClass}`}
            onClick={(e) => handleGoalBtnClick(e)}>
              {elem.buttonText}
          </button>
        </Link>
      )
    });
    return buttonsArr;
  }
  
  return (
    <main className='main-page'>

      {!currentLocation && <Loading message='Page loading, please wait.'/>}

      {currentLocation &&
        <>
          <Header pageName='main' location={currentLocation} resetItemData={resetItemData} />
          <section className='goal-container'>
            <div className='goal-btn-container nes-container is-rounded with-title'>
              <span>choose your adventure!</span>
              <article>
                {buttons}
              </article>
            </div>
          </section>
        </>
      }
    </main>
  )
}

export default Main;

Main.propTypes = {
  location: PropTypes.string,
  assignLocation: PropTypes.func,
  assignCategory: PropTypes.func,
  resetItemData: PropTypes.func,
  activateRandomState: PropTypes.func
}
