const utils = {

  getRandomElement(array) {
    return array[Math.floor(Math.random()*array.length)];
  },

  convertLocationPath(name) {
    return name.replaceAll(' ', '+');
  },

  revertLocationName(path) {
    return path.replaceAll('+', ' ');
  },

  addShimmerEffect(e) {
    e.target.classList.add('shimmer');
  },

}

export default utils;