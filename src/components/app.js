import React from 'react';
import BankBalance from './bank-balance';
import Interest from './interest';

const App = () => {
  return (
    <div>
      <h2>Interest Calculator</h2>
      <hr />
      <BankBalance />
      <hr />
      <Interest />
      
    </div>
  )
}

export default App;