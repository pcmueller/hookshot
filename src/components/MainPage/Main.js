import React from 'react';

function Main() {

  return (
    <main>
      <section className='welcome'>
        <h1>WELCOME TO HOOKSHOT</h1>
        <h4>we know you're very busy. <br></br>
            let's plan your next adventure!
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
      <section className='goal-btn-container'>
        <h4>~OR~</h4>
        <h3>SELECT TODAY'S GOAL</h3>
        <div className='goal-btns'>
          <button>DEFEAT MONSTERS</button>
          <button>$GET PAID$</button>
          <button>DO SOME FORAGING</button>
          <button>HUNT SOME CRITTERS</button>
          <button>GEAR UP</button>
        </div>
      </section>
    </main>
  )
}

export default Main;