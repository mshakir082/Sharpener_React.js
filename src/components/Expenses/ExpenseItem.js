import { useState } from 'react';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css';
import Card from '../UI/Card'
const ExpenseItem = (props)=>{
    let [title,setTitle]  = useState(props.title);
    let [amount,setAmount] = useState(props.amount)
 
    const clickHandler = () =>{
        setTitle('updated');
        console.log(title)
     
    }
    let amountHandler = () => {
        setAmount('$100');
        console.log('amountClicked')
     }
     return (
        <div className="expense-item">
           <ExpenseDate date={props.date} />
           <div className="location">{props.location}</div>
           <div className="expense-item__description">
              {/* <h2>  <ExpenseDetails title={props.title} /> </h2> */}
              <h2>{title}</h2>
              <div className="expense-item__price">{amount}</div>
           </div>
           <button onClick={amountHandler}>Expense</button>
           <button onClick={clickhandler}>Title</button>
        </div>
     );
  }
  export default ExpenseItem;

