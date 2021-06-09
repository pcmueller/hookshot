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
      <section className='goal-container'>
        <div className='goal-heading'>
          <h4>~OR~</h4>
          <h3>SELECT TODAY'S GOAL</h3>
        </div>
        <div className='goal-btns'>
          <button className='btn-left'>DEFEAT MONSTERS</button>
          <button className='btn-right'>$GET PAID$</button>
          <button className='btn-left'>DO SOME FORAGING</button>
          <button className='btn-right'>HUNT SOME CRITTERS</button>
          <button className='btn-left'>GEAR UP</button>
        </div>
      </section>
    </main>
  )
}

export default Main;