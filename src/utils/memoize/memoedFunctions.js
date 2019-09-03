import memoize from './memoize';


const memoedSin = memoize(Math.sin);
const memoedCos = memoize(Math.cos);

const getMemoedP5Sin = p5 => memoize(p5.sin, p5);
const getMemoedP5Cos = p5 => memoize(p5.cos, p5);


export {
  memoedSin,
  memoedCos,

  getMemoedP5Sin,
  getMemoedP5Cos
};