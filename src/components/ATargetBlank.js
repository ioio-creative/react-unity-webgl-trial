import React from 'react';


function ATargetBlank(props) {
  const { className, href, children } = props;
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}


export default ATargetBlank;