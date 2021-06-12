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
    const buttonsArr = categories.names.map(elem => {
      return (
        <Link to={`/location/${location}/category/${elem}`} key={elem}>
          <button className='nes-btn is-success' id={elem}>{elem}</button>
        </Link>
      )
    });
    const random = utils.getRandomElement(categories.names);
    buttonsArr.push(
      <Link to={`/category/${random}`} key='random'>
        <button className='nes-btn is-success' id='random'>ROLL THE DICE</button>
      </Link>
    )
    return buttonsArr;
  }
  
  return (
    <main className='main-page'>
      <section className='banner'>
        <Link to={'/'}>
          <h1 className='welcome-message'>WELCOME TO HYRULE</h1>
        </Link>
        <div className='welcome-location'>
          <h4>CURRENT LOCATION:</h4>
          <h3>{currentLocation}</h3>
        </div>
      </section>
      <section className='search-section nes-container'>
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
          <button className='nes-btn'>SEARCH</button>
        </div>
      </section>
      <section className='goal-container'>
        <div className='goal-heading'>
          <h4>~OR~</h4>
        </div>
        <div className='nes-container with-title goal-btns'>
          <span>SELECT TODAY'S GOAL</span>
          <article>
            {buttons}
          </article>
        </div>
      </section>
    </main>
  )
}

export default Main;