import utils from './utils';

const categories = [
  { name: 'monsters', buttonText: 'SLAY MONSTERS'},
  { name: 'treasure', buttonText: 'GIMME THE LOOT'},
  { name: 'equipment', buttonText: 'GEAR UP'},
  { name: 'creatures', buttonText: 'TRACK CRITTERS'},
  { name: 'materials', buttonText: 'FIND SNACKS'},
];

let random = utils.getRandomElement(categories);

categories.push(
  { name: random.name, buttonText: 'ROLL THE DICE' }
);

export default categories;