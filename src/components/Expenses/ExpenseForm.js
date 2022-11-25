import React from 'react'

const ExpenseForm = () => {

    const FormStyle = {
        border: '1px solid red',
        position: 'absolute',
        width: '25%',
        height: '30%',
        top: '20%',
        left: '50%',
        transform:'translate(-50%,-50%)',
        textAlign: 'left',
        padding: '20px',
        borderRadius: '7px'
    }
    const InputBox={
      width: '80%',
      height:'23px'
    }
  return (
    <div>
        <form style={FormStyle}>
            <label>Expense title</label><br/>
            <input style={InputBox} type="text" name="title" placeholder="Expense title"/><br/>
            <label>Expense Amount</label><br/>
            <input style={InputBox} type="number" name="amount" placeholder="Expense amount"/><br/>
            <label>Date</label><br/>
            <input style={InputBox} type="date" name="date" placeholder="Expense date"/><br/>
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default ExpenseForm