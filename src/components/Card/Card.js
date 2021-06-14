import React, { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';

function Card({ item }) {

  const [ uniqueProps, setUniqueProps ] = useState('');

  useEffect(() => {
    if (uniqueProps.length < 1) {
      setUniqueProps(retrieveUniqueProps());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkPropValidity = (propName) => {
    const prop = item[propName];

    if (prop && (typeof(prop) === 'object')) {
      return prop.join(', ');
    } else if (prop && (typeof(prop) === 'number')){ 
      return prop;
    } else if (prop && prop.length > 1) {
      return prop;
    } else {
      return 'unknown';
    }
  }
  
  const retrieveUniqueProps = () => {
    switch (item.category) {
      case 'treasure' || 'monsters' || 'non_food': 
        return (
          <div className='item-variables'>
            Common Locations:
            <p className='item-common-locations'>{checkPropValidity('common_locations')}</p>
            Drops:
            <p className='item-drops'>{checkPropValidity('drops')}</p>
          </div>
        );
      case 'equipment':
        return (
          <div className='item-variables'>
            Common Locations:
            <p className='item-common-locations'>{checkPropValidity('common_locations')}</p>
            Attack:
            <p className='item-attack'>{checkPropValidity('attack')}</p>
            Defense:
            <p className='item-defense'>{checkPropValidity('defense')}</p>
          </div>
        );
      case 'materials' || 'food':
        return (
          <div className='item-variables'>
            Common Locations:
            <p className='item-common-locations'>{checkPropValidity('common_locations')}</p>
            Cooking Effect:
            <p className='item-cooking-effect'>{checkPropValidity('cooking_effect')}</p>
            Hearts Recovered:
            <p className='item-hearts-recovered'>{checkPropValidity('hearts_recovered')}</p>
          </div>
        );
      default:
        break;
    }
  }

  if (!uniqueProps.length < 1) {
    return (
      <Loading />
    );
  }

  return (
    <article className='item-card' id={item.id} key={item.id}>
      <div className='image-container'>
      <img src={item.image} alt={item.name}/>
      </div>
      <div className='item-info'>
        <p className='item-name'>{item.name}</p>
          {uniqueProps}
        Description: 
        <p className='item-description'>{item.description}</p>
      </div>
    </article>
  )
}

export default Card;