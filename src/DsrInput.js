import React from 'react';

const DsrInput = ({
  id = '',
  name = '',
  placeholder = 'Type here...',
  type = 'text',
  value = '',
  onChange = () => {},
}) => {
  return (
    <div className="dsr-input">
      <input
        id={id}
        name={name}
        type={type}
        className="form-control mb-3"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default DsrInput;