import React, { Component } from 'react';

class Card extends Component {
  constructor({ item }) {
    super()
    this.state={
      item: item,
    }
  }

  componentDidMount = () => {
    console.log("CARD MOUNTED");
    console.log("ITEM: ", this.state.item);
  }

  checkPropValidity = (propName) => {
    const prop = this.state.item[propName];
    console.log("CHECKING: ", prop, typeof(prop));

    if (prop && (typeof(prop) === 'object')) {
      return prop.join(', ');
    } else if (typeof(prop) === 'number' || prop.length > 1) { 
      console.log("num/string: ", prop)
      return prop;
    } else {
      return 'unknown';
    }
  }
  
  retrieveUniqueProps = () => {
    switch (this.state.item.category) {
      case 'treasure' || 'monsters' || 'non_food': 
        return (
          <div className='item-variables'>
            Common Locations:
            <p className='item-common-locations'>{this.checkPropValidity('common_locations')}</p>
            Drops:
            <p className='item-drops'>{this.checkPropValidity('drops')}</p>
          </div>
        );
      case 'equipment':
        return (
          <div className='item-variables'>
            Common Locations:
            <p className='item-common-locations'>{this.checkPropValidity('common_locations')}</p>
            Attack:
            <p className='item-attack'>{this.checkPropValidity('attack')}</p>
            Defense:
            <p className='item-defense'>{this.checkPropValidity('defense')}</p>
          </div>
        );
      case 'materials' || 'food':
        return (
          <div className='item-variables'>
            Common Locations:
            <p className='item-common-locations'>{this.checkPropValidity('common_locations')}</p>
            Cooking Effect:
            <p className='item-cooking-effect'>{this.checkPropValidity('cooking_effect')}</p>
            Hearts Recovered:
            <p className='item-hearts-recovered'>{this.checkPropValidity('hearts_recovered')}</p>
          </div>
        );
      default:
        break;
    }
  }

  render() {
    return (
      <article className='item-card' id={this.state.item.id} key={this.state.item.id}>
        <div className='image-container'>
        <img src={this.state.item.image} alt={this.state.item.name}/>
        </div>
        <div className='item-info'>
          <p className='item-name'>{this.state.item.name}</p>
          {this.retrieveUniqueProps()}
            Description: 
          <p className='item-description'>{this.state.item.description}</p>
        </div>
      </article>
    )
  }
}

export default Card;