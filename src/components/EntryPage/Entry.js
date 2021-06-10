import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

function Entry({ locations, assignLocation }) {

  const [ selectedOption, setSelectedOption ] = useState('');
  const [ clickEnter, setClickEnter ] = useState(false);

  useEffect(() => {
    assignLocation(selectedOption.value);
    console.log("SELECTED OPTION: ", selectedOption);
    setClickEnter(false);
  }, [clickEnter]);

  const handleClick = () => {
    setClickEnter(true);
  };

  const options = locations.map(location => {
    const joined = location.replaceAll(' ', '');

    return { value: location, label: location, key: joined};
  });



  return (
    <section className='entry-container'>
      <header className='header'>
        <h1>HOOKSHOT</h1>
        <h4>
          A PRODUCTIVITY TOOL FOR THE BUSY HYRULIAN ADVENTURER
        </h4>
      </header>
      <form className='location-container' tabIndex='-1'>
        <h3>where are you now?</h3>
        <Select
          className='dropdown'
          placeholder='Select your location'
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </form>
      <Link to={`/home/:${selectedOption.key}`} id={selectedOption.key} className='entry-link-container'>
        <button 
          className='enter-btn' 
          type='submit' 
          onClick={handleClick}>
            CLICK TO ENTER
        </button>
      </Link>
    </section>
  )
}

export default Entry;