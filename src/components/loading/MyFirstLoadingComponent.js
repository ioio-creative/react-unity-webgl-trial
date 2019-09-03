import React from 'react';


// https://github.com/jamiebuilds/react-loadable
function MyFirstLoadingComponent(props) {
  const { error, timeout, pastDelay } = props;
  if (error) {
    console.error('Loading error:');
    console.error(error);
    return (
      <div>Sorry, there was a problem loading the page.</div>
    );
  } else if (timeout) {
    return (
      <div>Loading timeout</div>
    );
  } else if (pastDelay) {
    return (
      <div className="loading-screen">Now Loading ...</div>
    );
  }
  else {
    return null;
  }
};


export default  MyFirstLoadingComponent;