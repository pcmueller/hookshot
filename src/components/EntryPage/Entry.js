import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import AppContext from '../App/AppContext';

function Entry() {

  const [ state, dispatch ] = useContext(AppContext);
  const [ locationObj, setLocationObj ] = useState('');
  const [ options, setOptions ] = useState('');

  // const [ clickEnter, setClickEnter ] = useState(false);

  useEffect(() => {
    if (!state.enterClicked) {
      const locationOptions = state.locations.map(location => {
        const joined = location.replaceAll(' ', '+');
  
        return { value: location, label: location, key: joined};
      });
      setOptions(locationOptions);
    }
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    const enterClicked = true;
    dispatch({ type: 'ENTER_CLICKED', enterClicked});
    const location = locationObj.value;
    dispatch({ type: 'SET_LOCATION', location });
    console.log(locationObj);
  };

  // const options = state.locations.map(location => {
  //   const joined = location.replaceAll(' ', '+');

  //   return { value: location, label: location, key: joined};
  // });

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
            defaultValue={locationObj.key}
            onChange={setLocationObj}
            options={options}
            />
        </section>
        <section className='entry-btn-section'>
          <Link to={`/home/${locationObj.key}`} 
                id={locationObj.key}
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