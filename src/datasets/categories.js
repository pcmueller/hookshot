const categories = {

  names: [
    'monsters',
    'treasure',
    'equipment',
    'creatures',
    'materials',
  ],

  objects: {

    monsters: [
      'name',
      'category', 
      'common_locations', 
      'description',
      'drops',
      'image',
      'id',
    ],

    treasure: [
      'name',
      'category', 
      'common_locations', 
      'description',
      'drops',
      'image',
      'id',
    ],

    equipment: [
      'name',
      'category', 
      'common_locations', 
      'description',
      'attack',
      'defense',
      'image',
      'id',
    ],

    creatures: {

      food: [
        'name',
        'category',
        'common_locations',
        'description',
        'cooking_effect',
        'hearts_recovered',
        'image',
        'id',
      ],

      nonfood: [
        'name',
        'category', 
        'common_locations', 
        'description',
        'drops',
        'image',
        'id',
      ],

    },

    materials: [
        'name',
        'category',
        'common_locations',
        'description',
        'cooking_effect',
        'hearts_recovered',
        'image',
        'id',
      ],

  }

};


export default categories;