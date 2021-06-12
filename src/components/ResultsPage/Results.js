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
          <article className='item-card' id={item.id} key={item.id}>
            <div className='image-container'>
              <img src={item.image} alt={item.name}/>
            </div>
            <div className='item-info'>
              <p>Name: {item.name}</p>
              <p>Edible: Yes</p>
              <p>Common Locations: {item.common_locations}</p>
              <p>Description: {item.description}</p>
            </div>
          </article>
        )
      });
      localItems.nonfood.forEach(item => {
        itemList.push(
          <article className='item-card' id={item.id} key={item.id}>
            <div className='image-container'>
              <img src={item.image} alt={item.name}/>
            </div>
            <div className='item-info'>
              <p>{item.name}</p>
              <p>Edible: No</p>
              <p>Common Locations: {item.common_locations}</p>
              <p>Description: {item.description}</p>
            </div>
          </article>
        )
      });
    } else {
      localItems.forEach(item => {
        itemList.push(
          <article className='item-card' id={item.id} key={item.id}>
            <div className='image-container'>
              <img src={item.image} alt={item.name}/>
            </div>
            <div className='item-info'>
              <p>Name: {item.name}</p>
              <p>Common Locations: {item.common_locations}</p>
              <p>Description: {item.description}</p>
            </div>
          </article>
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
          <h4>
            wow, what a great choice. 
              <br></br>
            let's find some {category}!
          </h4>
        </header>
        <section className='results-section'>
          <div className='results-title'>
            <h3>
              Alright, here's a list of all the 
                <br></br>
              {category} in your area:</h3>
          </div>
          <div className='results-grid'>
            <div className='item-list'>
              {itemList}
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Results;