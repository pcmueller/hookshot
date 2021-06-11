import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import categories from '../../datasets/categories';
import utils from '../../utilities/utils';

function Main({ location }) {

  const [ currentLocation, setCurrentLocation ] = useState('');
  const [ buttons, setButtons ]  = useState([]);

  useEffect(() => {
    const formatted = location.replaceAll('+', ' ');
    setCurrentLocation(formatted);
    setButtons(buildButtons());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const buildButtons = () => {
    const buttonsArr = categories.map(elem => {
      return (
        <Link to={`/location/${location}/category/${elem}`} key={elem}>
          <button id={elem}>{elem}</button>
        </Link>
      )
    });
    const random = utils.getRandomElement(categories);
    buttonsArr.push(
      <Link to={`/category/${random}`} key='random'>
        <button id='random'>ROLL THE DICE</button>
      </Link>
    )
    return buttonsArr;
  }

  return (
    <main className='main-page'>
      <section className='main-banner'>
        <Link to={'/'} className='home-link-component'>
          <h1 className='welcome-message'>WELCOME TO HYRULE</h1>
        </Link>
        <div className='welcome-location'>
          <h4>CURRENT LOCATION:</h4>
          <h3>{currentLocation}</h3>
        </div>
      </section>
      <section className='search-section'>
        <h3>
          looking for an item or creature?
        </h3>
        <div className='search-bar'>
          <input
            className='search-input'
            type='text'
            placeholder='search here!'
            name='input'
          />
          <button>SEARCH</button>
        </div>
      </section>
      <section className='goal-container'>
        <div className='goal-heading'>
          <h4>~OR~</h4>
          <h3>SELECT TODAY'S GOAL</h3>
        </div>
        <div className='goal-btns'>
          <article>
            {buttons}
          </article>
        </div>
      </section>
    </main>
  )
}

export default Main;