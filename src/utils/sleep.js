// https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep


const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export default sleep;