import React from 'react';

function Main({ handleClick }) {

  return (
    <main>
      <section className='welcome'>
        <h1>WELCOME TO HOOKSHOT</h1>
        <h4>
          hyrule takes time. life takes even more.
          <br></br>
          so let's plan your next adventure!
        </h4>
      </section>
      <section className='search-container'>
        <h3>search for item or creature:</h3>
        <div className='search-bar'>
          <input
            className='search-input'
            type='text'
            placeholder='enter search'
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
          <button id='monsters' className='btn-left' onClick={handleClick}>DEFEAT MONSTERS</button>
          <button id='treasure' className='btn-right' onClick={handleClick}>GET PAID$</button>
          <button id='materials' className='btn-left' onClick={handleClick}>DO SOME FORAGING</button>
          <button id='creatures' className='btn-right' onClick={handleClick}>HUNT SOME CRITTERS</button>
          <button id='equipment' className='btn-left' onClick={handleClick}>GEAR UP</button>
        </div>
      </section>
    </main>
  )
}

export default Main;