import React from 'react';

function Entry({ locations }) {

  return (
    <section className='entry-container'>
      <header className='header'>
        <h1>HOOKSHOT</h1>
      </header>
      <form className='location-container' tabIndex='-1' >
          <label className='location-label' for='location'>
            <h3>where are you currently?</h3>
            <select required name='location-drop' id='location'>
              <option value='0'>Select destination</option>
            </select>
          </label>
        <button className='enter-btn' type='submit'>CLICK TO ENTER</button>
      </form>
    </section>
  )
}

export default Entry;