import React,{useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = (prop) =>{
    const[enterdTitle,seteneteredTitle] = useState('')
    const[enterdAmount,seteneteredAmount] = useState('')
    const[enterdDate,seteneteredDate] = useState('')
    //const [userInput,setuserInput] = useState({
      //  enterdTitle:'',
        //enterdAmount:'',
        //enterdDate:''
    //})
    
    const titleChangeHandler = (event)=>{
        seteneteredTitle(event.target.value)
        //setuserInput({
          //  ...userInput,
            //enterdTitle:event.target.value,
        //})
    }
    const amountChangeHandler = (event)=>{
        seteneteredAmount(event.target.value)
        //setuserInput({
          //  ...userInput,
            //enterdAmount:event.target.value,
        //})
    }
    const dateChangeHandler = (event)=>{
        seteneteredDate(event.target.value)
        //setuserInput({
          //  ...userInput,
            //enterdDate:event.target.value,
        //})
    }
    const submitHandler = (event)=>{
        event.preventDefault()
        const expensedata = {
            title:enterdTitle,
            amount:enterdAmount,
            date:new Date(enterdDate)
        }
        prop.onSaveExpenseData(expensedata)
        seteneteredTitle('')
        seteneteredAmount('')
        seteneteredDate('')
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Expense Title:</label>
                    <input type='text'value={enterdTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Expense Amount:</label>
                    <input type='number' min='0.01' step='0.01' value={enterdAmount} onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date:</label>
                    <input type='date' min='2020-01-01' max='2023-06-30' value={enterdDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__action'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm