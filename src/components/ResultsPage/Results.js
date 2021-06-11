import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import utils from '../../utilities/utils';

function Results({ location, category, categoryData, assignCategory }) {

  const [ data, setData ] = useState('');
  const [ locationData, setLocationData ] = useState('');
  
  useEffect(() => {
    assignCategory(category);
    if (categoryData) {
      setData(categoryData);
    }
    console.log("LOCATION PROP: ", location)
  }, [category]);

  useEffect(() => {
    console.log("USE EFFECT")
    if (data) {
      filterData(data);
    }
  }, [data]);

  const filterData = () => {


    console.log("FILTERING")
    // const localData = data.reduce((acc, elem) => {
    //   // if (elem['common_locations'].contains(location)) {
    //   //   acc.push(elem);
    //   // }
    //   acc.push(elem);
    //   return acc;
    // }, []);

    data.forEach(elem => {
      console.log(elem);
    });

    // console.log("LOCAL DATA: ", localData);
  }

  return (
    <main className='results-page'>
      <header className='results-banner'>
        <Link to={'/'} className='home-link-component'>
          <h1>HOOKSHOT</h1>
        </Link>
        <h4>wow, what a great choice. <br></br>let's find some {category}!</h4>
      </header>
      <section className='results-section'>
        <h3>Alright, here's a list of all the <br></br>{category} in your area:</h3>
        <article className='results-grid'>
          <ul className='item-list'>
            <li>ITEM #1</li>
            <li>ITEM #2</li>
            <li>ITEM #3</li>
            <li>ITEM #4</li>
            <li>ITEM #5</li>
            <li>ITEM #6</li>
          </ul>
        </article>
      </section>
    </main>
  )
}

export default Results;