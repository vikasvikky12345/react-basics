import './ExpenseItem.css';
function ExpenseItem(prop) {
    return (
        <div className="expense-item">
            <div>{prop.date}</div>
            <div className="expense-item__description">
                <h2>{prop.title}</h2>
                <h3>{prop.expenditure}</h3>
                <div className="expense-item__price">{prop.amount}</div>    
            </div>
        </div>
    )
}
export default ExpenseItem;
