import React,{useState} from 'react'
import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
const ExpenseItem = (prop) => {
    const [title,setTitle] = useState(prop.title)
    const [expense,setExpense] = useState(prop.amount)
    const clickHandler = () => {
        setTitle('updated!')
        console.log(title)
        
    }
    const changeExpense = () => {
        setExpense('$100')
    }



    
    return (
        <Card className="expense-item" id={prop.id}>
            <ExpenseDate date={prop.date} />    
            <ExpenseDetails amount={expense}  expenditure={prop.expenditure}   title={title} />
            <button onClick={clickHandler}>Change title</button>
            <button onClick={changeExpense}>change expense</button>
        </Card>
    )
}
export default ExpenseItem;
