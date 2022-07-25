'use strict'

const array = ['hello', 'world', 23, '23', null];
const type = 'string';

function filterBy(array, type) {

  let result = array.filter((item) => {
    if (typeof item !== type) {
      return true;
    }
  });

  return result;
}

console.log();
console.log(filterBy(array, type));

