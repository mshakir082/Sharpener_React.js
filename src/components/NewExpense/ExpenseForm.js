import React, {useState} from "react";
import './ExpenseForm.css';


const ExpenseForm = () => {

   const [enteredTitle , setEnteredTitle] = useState('');
   const [enteredAmount, setEnteredAmount] = useState('');
   const [enteredDate, setEnteredDate]   = useState('')


    

    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
    
      setEnteredAmount( event.target.value);
    }
    const formSubmissionHandler =(event) => {
      event.preventDefault();
   const obj ={
     amount:enteredAmount,
     title:enteredTitle,
     date: new Date(enteredDate),
    }
    console.log(obj)
};

    return (
        <div onSubmit ={formSubmissionHandler} className="formlayout" >
            <form className="formlayout">
                <div className="formlayout">
                    <div className="title">
                        <label>Title:-</label>
                        <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                       </div>
                    <div className="amount">
                        <label>Amount:-</label>
                        <input type='number' onChange={amountChangeHandler} />
                    </div>
                    <div className="date">
                        <label>Date:</label>
                        <input type='date' min="2019-01-01" max="2023-12-31"  />
                    </div>
                </div>
                <div >
                    <button className="form_button" type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
};
export default ExpenseForm;