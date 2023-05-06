import './ExpenseItem.css';
function ExpenseItem() {
    const expensedate = new Date(2021, 2, 28);
    const expensetitle = 'carinsurance';
    const expenseamount = 250;
    const locationofexpenditure = 'Insurance'
    return (
        <div className="expense-item">
            <div>date:{expensedate}</div>
            <div className="expense-item__description">
                <h2>title:{expensetitle}</h2>
                <div className="expense-item__price">amount:{expenseamount}</div>
            </div>
            <div>location:{locationofexpenditure}</div>
        </div>
    );
}
export default ExpenseItem;
