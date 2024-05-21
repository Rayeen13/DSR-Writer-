import React from 'react';

const DsrButton = ({ additionalClasses = '', text = '', onClick=()=>{} }) => {
  // Combine additional classes with the default classes
  const classes = `dsr-btn btn btn-round dsr-btn-light ${additionalClasses}`;

  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
};

export default DsrButton;
