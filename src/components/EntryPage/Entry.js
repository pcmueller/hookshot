import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import utils from '../../utilities/utils';

function Entry({ locations, assignLocation }) {

  const [ selectedOption, setSelectedOption ] = useState('');
  const [ clickEnter, setClickEnter ] = useState(false);

  useEffect(() => {
    setClickEnter(false);
  }, [clickEnter]);

  const handleClick = () => {
    setClickEnter(true);
    assignLocation(selectedOption.value);
  };

  const options = locations.map(location => {
    const path = utils.convertLocationPath(location);
    return <option value={location} label={location} key={path}>{path}</option>
  });

  return (
    <main className='entry-page'>
      <header className='banner'>
        <h1 className='app-title'>HOOKSHOT</h1>
        <h4 className='app-subtitle'>
          ~ A FIELD GUIDE FOR HYRULIAN EXPLORATION ~
        </h4>
      </header>
      <form className='form-container'>
        <section 
          className='nes-container is-rounded is-dark dropdown-section'
          style={{width: 'calc(50% + 8px)'}} 
          tabIndex='-1'
          >
          <label htmlFor="dark_select">where are you now?</label>
          <div className="nes-select">
            <select 
              required id="default_select"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
            >
              <option value="" disabled hidden>Select your location...</option>
              {options}
            </select>
          </div>
        </section>
        {/* <section className='location-dropdown-section' tabIndex='-1'>
          <h3>WHERE ARE YOU NOW?</h3>
          <Select
            className='dropdown'
            placeholder='Select your location'
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            />
        </section> */}
        <section className='enter-btn-section'>
          <Link to={`/home/${selectedOption.key}`} 
                id={selectedOption.key}
                className='entry-link-component'>
            <button 
              disabled={selectedOption.length < 1}
              className='enter-btn blinker' 
              type='reset'
              onClick={handleClick}>
                PRESS START
            </button>
          </Link>
        </section>
      </form>
    </main>
  )
}

export default Entry;