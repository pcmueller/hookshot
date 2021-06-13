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

  checkPropValidity = (prop) => {
    if (this.state.item[prop] && this.state.item[prop].length > 0) {
      return this.state.item[prop].join(', ');
    } else {
      return 'unknown';
    }
  }
  
  retrieveUniqueProps = () => {
    switch (this.state.item.category) {
      case 'treasure' || 'monsters' || 'non_food': 
        return (
          <div className='item-variables'>
            Drops:
            <p className='item-drops'>{this.checkPropValidity('drops')}</p>
          </div>
        );
      case 'equipment':
        return (
          <div className='item-variables'>
            Attack:
            <p className='item-attack'>{this.checkPropValidity('attack')}</p>
            Defense:
            <p className='item-defense'>{this.checkPropValidity('defense')}</p>
          </div>
        );
      case 'materials' || 'food':
        return (
          <div className='item-variables'>
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
            Common Locations:
          <p className='item-locations'>{this.checkPropValidity('common_locations')}</p>
          {this.retrieveUniqueProps}
            Description: 
          <p className='item-description'>{this.state.item.description}</p>
        </div>
      </article>
    )
  }
}

export default Card;