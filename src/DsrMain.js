import React, { useState } from 'react';

const DsrMain = ({children}) => {
  const [todayTasks, setTodayTasks] = useState('');
  const [tomorrowTasks, setTomorrowTasks] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  const handleGenerate = () => {
    const text = `
      DSR Writer Heading

      What Did I do today?
      ${todayTasks}

      What will I do tomorrow?
      ${tomorrowTasks}

      Signature of my company with logo
    `;
    setGeneratedText(text);
  };

  return (
    <div className="container mt-5">
      <h1 className="display-4">DSR Writer!</h1>
      <div className="row">
        {children}
      </div>
    </div>
  );
};

export default DsrMain;
