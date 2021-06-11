import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import categories from '../../datasets/categories';
// import utils from '../../utilities/utils';

function Results({}) {


  return (
    <main className='results-page'>
      <header className='results-banner'>
        <Link to={'/'} className='home-link-component'>
          <h1>HOOKSHOT</h1>
        </Link>
        <h4>
          LET'S FIND SOME *category*!
        </h4>
      </header>
      <section className='results-section'>
        <h3>Alright, here's what we've found in your area:</h3>
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