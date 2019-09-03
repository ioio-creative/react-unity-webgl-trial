const addPluralStr = (str, pluralStr, isPlural) => {
  return `${str}${isPlural ? pluralStr : ''}`
};

const addS = (str, isPlural) => addPluralStr(str, 's', isPlural);

const addEs = (str, isPlural) => addPluralStr(str, 'es', isPlural);

export {
  addS,
  addEs
};