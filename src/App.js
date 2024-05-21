import React from 'react';
import DsrMain from './DsrMain';
import DsrToday from './DsrToday';
import DsrTomorrow from './DsrTomorrow';
import DsrPreview from './DsrPreview';
import DsrContainer from './DsrContainer';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

export default function App() {
  return (
    <div className="container">
      <DsrMain>
        <DsrToday />
        <DsrTomorrow />
        <DsrPreview />
      </DsrMain>
    </div>
  );
}
