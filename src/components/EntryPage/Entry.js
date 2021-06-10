import React, { useState } from 'react';
import vhssmoke from '../../assets/images/vhs-smoke.jpeg';


function Entry({ locations, assignLocation }) {

  const [ currentLocation, setCurrentLocation ] = useState('');

  const locationOptions = locations.map(location => {
    const id = locations.indexOf(location) + 1;
    return <option onClick={setCurrentLocation} key={location} value={id}>{location}</option>
  });

  return (
    <section className='entry-container'>
      <header className='header'>
        <h1>HOOKSHOT</h1>
      </header>
      <form className='location-container' tabIndex='-1'>
          <label className='location-label' for='location'>
            <h3>where are you currently?</h3>
            <select required name='location-drop' id='location'>
              <option value='0'>Select destination</option>
              {locationOptions}
            </select>
          </label>
        <button 
          className='enter-btn' 
          type='submit' 
          onClick={assignLocation(currentLocation)}>
          CLICK TO ENTER
        </button>
      </form>
    </section>
  )
}

//  style={{ backgroundImage: `url(${vhssmoke})`}}

export default Entry;