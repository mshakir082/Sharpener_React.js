import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css';
function ExpenseItem(props){
    // console.log(props)
    // const expenseDate=new Date();
    // const expenseTitle='Car Insurance';
    // const expensePrice =294.5;
    
    return (
        <div key={props.id} className="expense-item" >
        <ExpenseDate date={props.date}/>
         <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    
        </div>
    )
}
export default ExpenseItem;