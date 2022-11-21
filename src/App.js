import React from 'react'
import Expense from "./components/Expenses/Expense";
function App() {
 
  // return React.createElement('div',{},
  // React.createElement('h2',{},"let's Stated"),
  // React.createElement(Expense,{}));

  return (
    <div>
    <h2>let's Stated</h2>
    <Expense/>
    </div>
  );
}

export default App;
