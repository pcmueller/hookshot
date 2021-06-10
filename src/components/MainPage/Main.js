import React from 'react';
import categories from '../../datasets/categories';
import utils from '../../utilities/utils';

function Main({ handleClick }) {

  return (
    <main>
      <section className='welcome'>
        <h1>WELCOME TO HOOKSHOT</h1>
        <h4>
          A PRODUCTIVITY TOOL FOR BUSY HYRULIANS
        </h4>
      </section>
      <section className='search-container'>
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
            <button id='monsters' onClick={handleClick}>DEFEAT MONSTERS</button>
            <button id='treasure' onClick={handleClick}>GIMME THE LOOT</button>
          </span>
          <span>
            <button id='materials' onClick={handleClick}>FORAGE THE LAND</button>
            <button id='creatures' onClick={handleClick}>BOTHER SOME CRITTERS</button>
          </span>
          <span>
            <button id='equipment' onClick={handleClick}>GEAR UP</button>
            <button id={utils.getRandomElement(categories)} onClick={handleClick}>ROLL THE DICE</button>
          </span>
        </div>
      </section>
    </main>
  )
}

export default Main;