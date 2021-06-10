import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

function Entry({ locations, assignLocation }) {

  const [ selectedOption, setSelectedOption ] = useState('');
  const [ clickEnter, setClickEnter ] = useState(false);

  useEffect(() => {
    setClickEnter(false);
  }, [clickEnter]);

  const handleClick = () => {
    setClickEnter(true);
    assignLocation(selectedOption.value);
    console.log("SELECTED: ", selectedOption);
  };

  const options = locations.map(location => {
    const joined = location.replaceAll(' ', '+');

    return { value: location, label: location, key: joined};
  });

  return (
    <main className='entry-page'>
      <header className='header'>
        <h1>HOOKSHOT</h1>
        <h4>
          PRODUCTIVITY GUIDE FOR THE BUSY HYRULIAN
        </h4>
      </header>
      <form className='form-container'>
        <section className='location-dropdown-section' tabIndex='-1'>
          <h3>where are you now?</h3>
          <Select
            className='dropdown'
            placeholder='Select your location'
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            />
        </section>
        <section className='entry-btn-section'>
          <Link to={`/home/${selectedOption.key}`} 
                id={selectedOption.key}
                className='entry-link-component'>
            <button 
              className='enter-btn' 
              type='reset'
              onClick={handleClick}>
                CLICK TO ENTER
            </button>
          </Link>
        </section>
      </form>
    </main>
  )
}

export default Entry;