import React,{useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = () =>{
    //const[eneterdTitle,seteneteredTitle] = useState('')
    //const[eneterdAmount,seteneteredAmount] = useState('')
    //const[eneterdDate,seteneteredDate] = useState('')
    const [userInput,setuserInput] = useState({
        enterdTitle:'',
        enterdAmount:'',
        enterdDate:''
    })
    
    const titleChangeHandler = (event)=>{
        //seteneteredTitle(event.target.value)
        setuserInput({
            ...userInput,
            enterdTitle:event.target.value,
        })
    }
    const amountChangeHandler = (event)=>{
        //seteneteredAmount(event.target.value)
        setuserInput({
            ...userInput,
            enterdAmount:event.target.value,
        })
    }
    const dateChangeHandler = (event)=>{
        //seteneteredDate(event.target.value)
        setuserInput({
            ...userInput,
            enterdDate:event.target.value,
        })
    }
    const submitHandler = (event)=>{
        event.preventDefault()
        console.log(userInput)
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Expese Title:</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Expense Amount:</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date:</label>
                    <input type='date' min='2022-01-01' max='2023-06-30' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__action'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm