import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import utils from '../../utilities/utils';

function Results(
  { location, 
    category, 
    categoryData, 
    localItems,
    backupItems,
    itemCards,
    dataLoaded,
    assignDataLoadState,
    itemsFiltered,
    assignCategory,
    retrieveCategoryData,
    filterItems,
    addItemCard,
  }) {

  // const [ cleanedElements, setCleanedElements ] = useState([]);
  const [ message, setMessage ] = useState('Page Loading');
  
  useEffect(() => {
    if (!categoryData) {
      assignDataLoadState(false)
      assignCategory(category);
      retrieveCategoryData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (itemsFiltered) {
      buildItemCards();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsFiltered]);

  const buildItemCards = async () => {
    localItems.length > 0 ? 
      localItems.forEach(item => {
        addItemCard(item);
      })
    :
      backupItems.forEach(item => {
        addItemCard(item)
      });
  }

  if (itemCards.length === 0) {
    return (
      <main>
        <section className='banner' onMouseOver={utils.addShimmerEffect}>
        <Link to={'/'}>
          <h1 className='welcome-message'>WELCOME TO HYRULE</h1>
        </Link>
        <div className='nes-container is-rounded welcome-location'>
          <h4>CURRENT LOCATION:</h4>
          <h3>{location}</h3>
        </div>
      </section>
        <h2 className='message'>
          {message}
        </h2>
      </main>
    )
  }

  return (
    <main className='results-page'>
      <section className='banner' onMouseOver={utils.addShimmerEffect}>
        <Link to={'/'}>
          <h1 className='welcome-message'>WELCOME TO HYRULE</h1>
        </Link>
        <div className='nes-container is-rounded welcome-location'>
          <h4>CURRENT LOCATION:</h4>
          <h3>{location}</h3>
        </div>
      </section>
        <section className="results-header message -left">
          <i className="nes-bcrikko animate__heartBeat"></i>
          <div className="nes-balloon from-left">
            <p>Great choice! Here's a list of {category} in your area:</p>
          </div>
        </section>
      <section className='results-section'>
        <div className='results-grid'>
          <div className='item-list'>
            {itemCards}
          </div>
        </div>
      </section>
    </main>
  )


}

export default Results;

    // if (category === 'creatures') {
    //   localItems.food.forEach(item => {
    //     itemList.push(
    //       <article className='item-card' id={item.id} key={item.id}>
    //         <div className='image-container'>
    //           <img src={item.image} alt={item.name}/>
    //         </div>
    //         <div className='item-info'>
    //           <p>Name: {item.name}</p>
    //           <p>Edible: Yes</p>
    //           <p>Common Locations: {item.common_locations.join(', ')}</p>
    //           <p>Description: {item.description}</p>
    //         </div>
    //       </article>
    //     )
    //   });
    //   localItems.nonfood.forEach(item => {
    //     itemList.push(
    //       <article className='item-card' id={item.id} key={item.id}>
    //         <div className='image-container'>
    //           <img src={item.image} alt={item.name}/>
    //         </div>
    //         <div className='item-info'>
    //           <p>{item.name}</p>
    //           <p>Edible: No</p>
    //           <p>Common Locations: {item.common_locations.join(', ')}</p>
    //           <p>Description: {item.description}</p>
    //         </div>
    //       </article>
    //     )
    //   });
    // } else {


  //     const filterCreatures = () => {
  //   let creatures = { food: [], nonfood: [] };

  //   categoryData.food.forEach(elem => {
  //     if (elem['common_locations'].includes(location)) {
  //       creatures.food.push(elem);
  //     }
  //   });

  //   categoryData['non_food'].forEach(elem => {
  //     if (elem['common_locations'].includes(location)) {
  //       creatures.nonfood.push(elem);
  //     }
  //   });

  //   return creatures;
  // }

  // const filterNonCreatures = async () => {
  //   console.log("into the filter function!");
  //   let filtered = await categoryData.reduce((acc, elem) => {
  //     if (elem['common_locations'].includes(location)) {
  //       console.log("MATCHED ITEM: ", elem);
  //       acc.push(elem);
  //     }
  //     return acc;
  //   }, []);
  //   console.log("ALL MATCHES: ", filtered);
  //   return filtered;
  // }