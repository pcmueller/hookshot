import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Results(
  { location, 
    category, 
    categoryData, 
    assignCategory, 
    assignDataLoadState
  }) {

  const [ localItems, setLocalItems ] = useState([]);
  const [ itemList, setItemList ] = useState([]);
  
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
      filterLocalItems(categoryData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryData])

  const filterLocalItems = async () => {
    let filtered = [];

    if (category === 'creatures') {
      filtered = filterCreatures();
    } else {
      filtered = filterNonCreatures();
    }
    setLocalItems(filtered);
  }

  const filterCreatures = () => {
    let creatures = { food: [], nonfood: [] };

    categoryData.food.forEach(elem => {
      if (elem['common_locations'].includes(location)) {
        creatures.food.push(elem);
      }
    });

    categoryData['non_food'].forEach(elem => {
      if (elem['common_locations'].includes(location)) {
        creatures.nonfood.push(elem);
      }
    });

    return creatures;
  }

  const filterNonCreatures = () => {
    return categoryData.reduce((acc, elem) => {
      if (elem['common_locations'].includes(location)) {
        acc.push(elem);
      }
      return acc;
    }, []);
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