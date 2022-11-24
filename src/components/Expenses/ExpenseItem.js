import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css';
import Card from '../UI/Card'
const ExpenseItem = (props)=>{
    // console.log(props)
    // const expenseDate=new Date();
    // const expenseTitle='Car Insurance';
    // const expensePrice =294.5;
    const clickHandler = () =>{
        console.log('Clicked!!!');
    }
    return (
        <Card key={props.id} className="expense-item" >
        <ExpenseDate date={props.date}/>
         <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Delete Expense</button>
        </Card>
    )
}
export default ExpenseItem;