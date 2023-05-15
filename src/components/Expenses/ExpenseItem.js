import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
const ExpenseItem = (prop) => {
    const clickHandler = () => {
        console.log('clicked!!')
    }
    const deleteitem = () =>{
        const item = document.getElementById(prop.id);
        if(item && item.parentNode){
            item.parentNode.removeChild(item);
        }
    };


    
    return (
        <Card className="expense-item" id={prop.id}>
            <ExpenseDate date={prop.date} />    
            <ExpenseDetails amount={prop.amount}  expenditure={prop.expenditure}   title={prop.title} />
            <button onClick={clickHandler}>Change expense</button>
            <button onClick={deleteitem}>delete expense</button>
        </Card>
    )
}
export default ExpenseItem;
