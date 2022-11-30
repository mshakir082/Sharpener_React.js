import React from 'react'
import Expense from "./components/Expenses/Expense";
import ExpenseForm from './components/Expenses/ExpenseForm'
import NewExpense from './components/NewExpense/NewExpense';
function App() {
 
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
    {/* <div><ExpenseForm/></div>
    <br/> <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <div>
    <Expense/>
    </div> */}
    <NewExpense/>
    <NewExpense onAddExpense ={addExpenseHandler} />
    </div>
  );
}

export default App;
