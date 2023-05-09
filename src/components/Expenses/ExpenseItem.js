import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
const ExpenseItem = (prop) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={prop.date} />
            <ExpenseDetails amount={prop.amount}  expenditure={prop.expenditure}   title={prop.title} />
        </Card>
    )
}
export default ExpenseItem;
