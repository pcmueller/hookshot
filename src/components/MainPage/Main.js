import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import categories from '../../datasets/categories';
import utils from '../../utilities/utils';

function Main({ location, assignLocation }) {

  const [ currentLocation, setCurrentLocation ] = useState('');
  const [ buttons, setButtons ]  = useState([]);

  useEffect(() => {
    const formatted = location.replaceAll('+', ' ');
    setCurrentLocation(formatted);
    assignLocation(formatted);
    setButtons(buildButtons());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const buildButtons = () => {
    const buttonsArr = categories.names.map(elem => {
      return (
        <Link to={`/location/${location}/category/${elem}`} key={elem}>
          <button className='nes-btn is-primary' id={elem}>{elem}</button>
        </Link>
      )
    });
    const random = utils.getRandomElement(categories.names);
    buttonsArr.push(
      <Link to={`/category/${random}`} key='random'>
        <button className='nes-btn is-error' id='random'>ROLL THE DICE</button>
      </Link>
    )
    return buttonsArr;
  }

  return (
    <main className='main-page'>
      <section className='banner' onMouseOver={utils.addShimmerEffect}>
        <Link to={'/'}>
          <h1 className='welcome-message'>WELCOME TO HYRULE</h1>
        </Link>
        <div className='welcome-location'>
          <h4>current location:</h4>
          <h3>{currentLocation}</h3>
        </div>
      </section>
      <section className='search-section nes-container is-rounded'>
        <label className='search-label' htmlFor="name_field">looking for an item or creature?</label>
        <div className='nes-field search-bar'>
          <input
            type='text'
            id='name_field'
            className='nes-input is-inline search-input'
            placeholder='search here!'
            name='input'
          />
          <button className='nes-btn'>search</button>
        </div>
      </section>
      <section className='goal-container'>
        <div className='goal-heading'>
          <h4>~OR~</h4>
        </div>
        <div className='goal-btns nes-container is-rounded with-title'>
          <span>choose your adventure!</span>
          <article>
            {buttons}
          </article>
        </div>
      </section>
    </main>
  )
}

export default Main;