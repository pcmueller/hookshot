import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import categories from '../../datasets/categories';

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

  useEffect(() => {
    let list = [];
    if (localItems) {
      list = buildItemList();
    }
    if (list.length > 0) {
      setItemList(list);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localItems])

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
    let itemCards = [];
    if (category === 'creatures') {
      localItems.food.forEach(item => {
        itemList.push(
          <p id={item.id} key={item.id}>
            <img src={item.image} alt={item.name}/>
            <h2>Name: {item.name}</h2>
            <h3>Edible: Yes</h3>
            <h3>Common Locations: {item.common_locations}</h3>
            <h3>Description: {item.description}</h3>
          </p>
        )
      });
      localItems.nonfood.forEach(item => {
        itemList.push(
          <p id={item.id} key={item.id}>
            <img src={item.image} alt={item.name}/>
            <h2>Name: {item.name}</h2>
            <h3>Edible: No</h3>
            <h3>Common Locations: {item.common_locations}</h3>
            <h3>Description: {item.description}</h3>
          </p>
        )
      });
    } else {
      localItems.forEach(item => {
        itemList.push(
          <p id={item.id} key={item.id}>
            <img src={item.image} alt={item.name}/>
            <h2>Name: {item.name}</h2>
            <h3>Common Locations: {item.common_locations}</h3>
            <h3>Description: {item.description}</h3>
          </p>
        )
      });
    }
    return itemCards;
  }

  if (itemList.length === 0) {
    console.log("NO LIST YET");
    return (
      <main>
        <h1>PAGE LOADING</h1>
      </main>
    )
  } else {
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
              {itemList}
            </ul>
          </article>
        </section>
      </main>
    )
  }
}

export default Results;