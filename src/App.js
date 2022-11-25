import React from 'react'
import Expense from "./components/Expenses/Expense";
import ExpenseForm from './components/Expenses/ExpenseForm'
function App() {
 
  // return React.createElement('div',{},
  // React.createElement('h2',{},"let's Stated"),
  // React.createElement(Expense,{}));

  return (
    <div>
    <div><ExpenseForm/></div>
    <br/> <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <div>
    <Expense/>
    </div>
    
    </div>
  );
}

export default App;
