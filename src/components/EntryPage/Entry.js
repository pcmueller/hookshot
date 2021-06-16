import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';

import utils from '../../utilities/utils';

const Entry = ({ locations, assignLocation, resetItemData }) => {

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

  const handleEnterBtnClick = () => {
    setClickEnter(true);
    assignLocation(selectedOption.value);
  };

  const options = locations.map(location => {
    return <option value={location} label={location} key={location}></option>
  });

  return (
    <main className='entry-page shine' onMouseOver={utils.addShimmerEffect}>
      <Header pageName='entry' resetItemData={resetItemData} />
      {!locations && <Loading message='Page loading, please wait.'/>}

      {locations && 
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
                onClick={handleEnterBtnClick}>
                  <i className="snes-logo"></i><br></br>
                  PRESS START
              </button>
            </Link>
          </section>
        </form>
      }
    </main>
  )
}

export default Entry;

Entry.propTypes = {
  locations: PropTypes.array,
  assignLocation: PropTypes.func, 
  resetItemData: PropTypes.func
}