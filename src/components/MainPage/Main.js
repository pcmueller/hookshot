import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import categories from '../../datasets/categories';
import utils from '../../utilities/utils';

function Main({ location, handleClick }) {

  const [ currentLocation, setCurrentLocation ] = useState('');
  const [ category, setCategory ] = useState('');

  useEffect(() => {
    const formatted = location.replaceAll('+', ' ');
    setCurrentLocation(formatted);
  }, [location]);

  useEffect(() => {
    setCategory(formatted);
  }, [location]);

  return (
    <main className='main-page'>
      <section className='welcome-section'>
        <Link to={'/'} className='home-link-component'>
          <h1 className='welcome-heading'>WELCOME TO HYRULE</h1>
        </Link>
        <div className='welcome-subtext'>
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
            // value={this.state.searchQuery}
            // onChange={this.handleChange}
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
          <span>
            <Link to={`/category/${selectedOption.key}`} >
              <button id='monsters' onClick={handleClick}>SLAY MONSTERS</button>
            </Link>
            <Link>
              <button id='treasure' onClick={handleClick}>GIMME THE LOOT</button>
            </Link>
            <Link>
              <button id='materials' onClick={handleClick}>SNACK TIME</button>
            </Link>
          </span>
          <span>
            <Link>
              <button id='creatures' onClick={handleClick}>BOTHER SOME CRITTERS</button>
            </Link>
            <Link>
              <button id='equipment' onClick={handleClick}>GEAR UP</button>
            </Link>
            <Link>
              <button id={utils.getRandomElement(categories)} onClick={handleClick}>ROLL THE DICE</button>
            </Link>
          </span>
        </div>
      </section>
    </main>
  )
}

export default Main;