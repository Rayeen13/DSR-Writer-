import React, { useState } from 'react';
import DsrContainer from './DsrContainer';
import DsrInput from './DsrInput';
import DsrLabel from './DsrLabel';
import DsrButton from './DsrButton';

export default function DsrToday() {
  const [inputs, setInputs] = useState([
    { id: 0, component: <DsrInput key={0} /> },
  ]);
  const [inputValues, setInputValues] = useState([]);

  const addInput = () => {
    let newInputId = inputs.length;
    setInputs([
      ...inputs,
      { id: newInputId, component: <DsrInput key={newInputId} onChange={handleInputChange}/> },
    ]);
  };
  const removeInput = (id) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  const handleInputChange = (event, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  return (
    <DsrContainer>
      <DsrLabel text="What did you do today?" />
      <DsrButton
        text={<b>+</b>}
        additionalClasses="float-right"
        onClick={addInput}
      />
      <hr />
      {inputs.map((input, index) => (
        <div key={input.id} style={{ display: 'flex' }}>
          {input.component}
          <DsrButton
            text={<b>x</b>}
            value={inputValues[index]}
            onClick={() => removeInput(input.id)}
          />
        </div>
      ))}
    </DsrContainer>
  );
}
