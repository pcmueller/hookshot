import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import utils from '../../utilities/utils';

function Entry({ locations, assignLocation, resetData }) {

  const [ selectedOption, setSelectedOption ] = useState('');
  const [ locationPath, setLocationPath ] = useState('');
  const [ clickEnter, setClickEnter ] = useState(false);

  useEffect(() => {
    setClickEnter(false);
  }, [clickEnter]);

  const handleSelect = (e) => {
    const location = e.target.value;
    setSelectedOption(location);
    setLocationPath(utils.convertLocationPath(location));
  }

  const handleClick = () => {
    setClickEnter(true);
    assignLocation(selectedOption.value);
  };

  const options = locations.map(location => {
    return <option value={location} label={location} key={location}></option>
  });

  return (
    <main className='entry-page shine' onMouseOver={utils.addShimmerEffect}>
      <header className='banner'>
        <Link to={'/'} onClick={resetData}>
          <h1 className='app-title' id='app-title'>HOOKSHOT</h1>
        </Link>
        <h4 className='app-subtitle'>
          ~ A FIELD GUIDE FOR HYRULIAN EXPLORERS ~
        </h4>
      </header>
      <form className='form-container'>
        <section 
          className='nes-container is-rounded is-dark dropdown-section'
          style={{width: 'calc(50% + 8px)'}} 
          tabIndex='-1'
          >
          <label className='drop-label' htmlFor="dark_select">where are you now?</label>
          <div className="select nes-select">
            <select 
              defaultValue="0"
              onChange={handleSelect}
            >
              <option value="0" disabled >Select your location...</option>
              {options}
            </select>
          </div>
        </section>
        <section className='enter-btn-section'>
          <Link to={`/home/${locationPath}`} 
                id={locationPath}
                className='entry-link-component'
                onClick={assignLocation}>
            <button 
              disabled={selectedOption.length < 1}
              className='enter-btn blinker' 
              type='reset'
              onClick={handleClick}>
                <i className="snes-logo"></i><br></br>
                PRESS START
            </button>
          </Link>
        </section>
      </form>
    </main>
  )
}

export default Entry;