const ExpenseDetails = (prop) => {
    return(
        <div className="expense-item__description">
            <h2>{prop.title}</h2>
            <h3>{prop.expenditure}</h3>
        <div className="expense-item__price">{prop.amount}</div>    
        </div>
    )
}
export default ExpenseDetails;