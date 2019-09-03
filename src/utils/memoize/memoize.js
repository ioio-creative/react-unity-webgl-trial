import { isObject } from 'utils/js/isObject';


const stringifyIfIsObject = (obj) => {
  return isObject(obj) ? JSON.stringify(obj) : obj;
};

const slice = Array.prototype.slice;

// https://www.sitepoint.com/implementing-memoization-in-javascript/

const memoize = (func, self) => {
  const memo = {};

  return function() {
    const args = slice.call(arguments).map(stringifyIfIsObject);

    if (args in memo)
      return memo[args];
    else
      return (memo[args] = func.apply(self || this, args));
  }
};


export default memoize;