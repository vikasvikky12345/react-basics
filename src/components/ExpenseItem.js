import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
function ExpenseItem(prop) {
    return (
        <div className="expense-item">
            <ExpenseDate date={prop.date} />
            <ExpenseDetails amount={prop.amount}  expenditure={prop.expenditure}   title={prop.title} />
        </div>
    )
}
export default ExpenseItem;
