import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Results(
  { location, 
    category, 
    categoryData, 
    assignCategory, 
    assignDataLoadState, 
    loaded }) {

  const [ localItems, setLocalItems ] = useState([]);
  // const [ data, setData ] = useState([]);
  
  useEffect(() => {
    if (!categoryData) {
      assignDataLoadState(false)
      assignCategory(category);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (categoryData) {
      assignDataLoadState(true);
      // setData(categoryData);
      filterLocalItems(categoryData);
    }
  }, [categoryData])

  const filterLocalItems = async () => {
    const filtered = await categoryData.reduce((acc, elem) => {
      if (elem['common_locations'].includes(location)) {
        acc.push(elem);
      }
      return acc;
    }, []);
    setLocalItems(filtered);
  }

  const buildItemList = () => {
    const itemList = localItems.filter(item => {
      return (
        <p>
          <h2>Name: {item.name}</h2>
          <h3>Cooking Effect: </h3>
        </p>
      )
    });
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