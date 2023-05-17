import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'
const ExpenseList = prop =>{
    if(prop.expenses.length === 0){
        return<h2 className='expenses-list__fallback'>Found No Expense</h2>
    }
    return(
        <ul className='expenses-list'>
        {prop.expenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))}
        </ul>
    )
}
export default ExpenseList;