const isObject = (obj) => {
  return typeof(obj) === 'object';
};

const isObjectButNotArray = (obj) => {
  return !Array.isArray(obj) && isObject(obj);
};


export {
  isObject,
  isObjectButNotArray
};