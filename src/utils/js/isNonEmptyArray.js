const isNonEmptyArray = (obj) => {
  return Array.isArray(obj) && obj.length > 0;
}


export default isNonEmptyArray;