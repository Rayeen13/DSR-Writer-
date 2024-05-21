import React from 'react';
import DsrContainer from './DsrContainer';
import DsrInput from './DsrInput';
import DsrLabel from './DsrLabel';
import DsrButton from './DsrButton';

export default function DsrTomorrow() {
  return (
  <DsrContainer>
    <DsrLabel text="What will you do tomorrow?" />
    <DsrButton text={<b>+</b>} additionalClasses="float-right" />
    <hr />
    <DsrInput />
    <DsrInput />
  </DsrContainer>
  );
}

export default DsrTomorrow