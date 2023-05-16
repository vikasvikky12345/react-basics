import React from 'react'
import './ExpenseForm.css'
const ExpenseForm = () =>{
    const titleChangeHandler = (event)=>{
        console.log(event.target.value)
    }
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Expese Title:</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Expense Amount:</label>
                    <input type='number' min='0.01' step='0.01'/>
                </div>
                <div className='new-expense__control'>
                    <label>Date:</label>
                    <input type='date' min='2022-01-01' max='2023-06-30' />
                </div>
            </div>
            <div className='new-expense__action'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm