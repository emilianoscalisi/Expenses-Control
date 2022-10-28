import "./ExpenseDate.css"

function ExpenseDate(props) {

    const dateFixb = new Date(props.date * 1000);

    const month = dateFixb.toLocaleString("en-US", { month: "2-digit" });
    const day = dateFixb.toLocaleString("en-US", { day: "2-digit" });
    const year = dateFixb.getFullYear();  


    return (
        <div className="expense-date">
            <div className="expense-date__day">{day} /</div>
            <div className="expense-date__month">{month} /</div>
            <div className="expense-date__year"> {year}</div>
        </div>

    );
}

export default ExpenseDate;