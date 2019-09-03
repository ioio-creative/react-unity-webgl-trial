import Loadable from 'react-loadable';

import MyFirstLoadingComponent from './MyFirstLoadingComponent';
//import sleep from 'utils/sleep';


// https://github.com/jamiebuilds/react-loadable
// loader is a function that return a Promise, e.g. dynamic import(), fetch(), etc.
// loading is a Component
// delay in millis
// timeout in millis
// render is a function that accepts (loaded, props) and returns a React element. loaded is what returned from loader
function asyncLoadingComponent(loader, loading = MyFirstLoadingComponent, delay = 200, timeout = 5000) {
  return Loadable({
    loader: loader,
    loading: loading,
    delay: delay,/*timeout - 3000*/
    timeout: timeout
  });
};


export default asyncLoadingComponent;