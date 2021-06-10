import React, { useState, useEffect } from 'react';
import Select from 'react-select';

function Entry({ locations, assignLocation }) {

  const [ selectedOption, setSelectedOption ] = useState('');
  const [ clickEnter, setClickEnter ] = useState(false);

  useEffect(() => {
    assignLocation(selectedOption.value);
  }, [clickEnter]);

  const handleClick = () => {
    setClickEnter(true);
  };

  const options = locations.map(location => {
    return { value: location, label: location };
  });

  return (
    <section className='entry-container'>
      <header className='header'>
        <h1>HOOKSHOT</h1>
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
      <button 
        className='enter-btn' 
        type='submit' 
        onClick={handleClick}>
          CLICK TO ENTER
      </button>
    </section>
  )
}

export default Entry;