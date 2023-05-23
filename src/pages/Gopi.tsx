import React, { useContext } from 'react';
import { GopiNavContext } from '../components/ContextGopi';

const GopiContext = () => {
  const GopiTheme = useContext(GopiNavContext);
  console.log(GopiTheme);
  return (
    <div style={{background: GopiTheme.primary.main}}>
      <h1 style={{color: GopiTheme.primary.text}}>Gopi Nav</h1>
    </div>
  );
};

export default GopiContext;