const ExpenseDetails = (prop) => {
    let title = prop.title
    let amount = prop.amount
    return(
        <div className="expense-item__description">
            <h2>{title}</h2>
            <h3>{prop.expenditure}</h3>
        <div className="expense-item__price">{amount}</div>    
        </div>
    )
}
export default ExpenseDetails;