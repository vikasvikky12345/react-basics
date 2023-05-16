import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'
const NewExpense = (prop) =>{
    const SaveExpenseDataHandler = (eneterdExpenseData)=>{
        const expensedata = {
            ...eneterdExpenseData,
            id:Math.random().toString()
        }
        prop.onAddExpense(expensedata)
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData = {SaveExpenseDataHandler}/>
        </div>
    )

}
export default NewExpense