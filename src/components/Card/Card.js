import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import errorImage from '../../assets/images/no-image.jpeg';

const Card = ({ item }) => {

  const [ uniqueProps, setUniqueProps ] = useState('');

  useEffect(() => {
    if (!uniqueProps || uniqueProps.length < 1) {
      setUniqueProps(retrieveUniqueProps());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const replaceBrokenImage = (image) => {
    image.onerror = "";
    image.src = errorImage;
    return true;
  }

  const checkPropValidity = (propName) => {
    const prop = item[propName];

    if (prop && prop.length === 0) {
      return 'none';
    } else if (prop && (typeof(prop) === 'object')) {
      return prop.join(', ');
    } else if (typeof(prop) === 'number') { 
      return prop;
    } else if (prop && prop.length > 1) {
      return prop;
    } else {
      return 'unknown';
    }
  }
  
  const retrieveUniqueProps = () => {
    switch (item.category) {
      case 'monsters': 
        return (
          <div className='item-variables'>
            <h3>Common Locations</h3>
            <p className='item-common-locations'>{checkPropValidity('common_locations')}</p>
            <h3>Drops</h3>
            <p className='item-drops'>{checkPropValidity('drops')}</p>
          </div>
        );
      case 'treasure': 
        return (
          <div className='item-variables'>
            <h3>Common Locations</h3>
            <p className='item-common-locations'>{checkPropValidity('common_locations')}</p>
            <h3>Drops</h3>
            <p className='item-drops'>{checkPropValidity('drops')}</p>
          </div>
        );
      case 'equipment':
        return (
          <div className='item-variables'>
            <h3>Common Locations</h3>
            <p className='item-common-locations'>{checkPropValidity('common_locations')}</p>
            <h3>Attack</h3>
            <p className='item-attack'>{checkPropValidity('attack')}</p>
            <h3>Defense</h3>
            <p className='item-defense'>{checkPropValidity('defense')}</p>
          </div>
        );
      case 'materials':
        return (
          <div className='item-variables'>
            <h3>Common Locations</h3>
            <p className='item-common-locations'>{checkPropValidity('common_locations')}</p>
            <h3>Cooking Effect</h3>
            <p className='item-cooking-effect'>{checkPropValidity('cooking_effect')}</p>
            <h3>Hearts Recovered</h3>
            <p className='item-hearts-recovered'>{checkPropValidity('hearts_recovered')}</p>
          </div>
        );
      case 'creatures':
        if (item['cooking_effect']) {
          return (
            <div className='item-variables'>
              <h3>Common Locations</h3>
              <p className='item-common-locations'>{checkPropValidity('common_locations')}</p>
              <h3>Cooking Effect</h3>
              <p className='item-cooking-effect'>{checkPropValidity('cooking_effect')}</p>
              <h3>Hearts Recovered</h3>
              <p className='item-hearts-recovered'>{checkPropValidity('hearts_recovered')}</p>
            </div>
          );
        } else {
          return (
            <div className='item-variables'>
              <h3>Common Locations</h3>
              <p className='item-common-locations'>{checkPropValidity('common_locations')}</p>
              <h3>Drops</h3>
              <p className='item-drops'>{checkPropValidity('drops')}</p>
            </div>
          );
        }
      default:
        break;
    }
  }

  return (
    <article className='item-card'>
      <div className='image-container'>
      <img 
        src={item.image} 
        alt={item.name} 
        onError={(e)=>replaceBrokenImage(e.target)}/>
      </div>
      <div className='item-info'>
        <p className='item-name'>{item.name}</p>
          {uniqueProps}
        <h3>Description </h3>
        <p className='item-description'>{item.description}</p>
      </div>
    </article>
  )
}

export default Card;

Card.propTypes = {
  item: PropTypes.object,
}