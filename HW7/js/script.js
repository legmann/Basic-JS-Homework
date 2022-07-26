'use strict'

const array = ['hello', 'world', 23, '23', null];
const type = 'null';

function filterBy(array, type) {

  let result = array.filter((item) => {
    if (type === 'null' && typeof item === 'object') {
      return false;
    }
    else if (typeof item !== type) {
      return true;
    }
  });

  return result;
}

console.log(filterBy(array, type));

