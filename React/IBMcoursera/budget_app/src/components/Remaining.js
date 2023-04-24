import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 

//Uses the reduce funtion to get a total of all costs, assigning this 
//to a variable and displaying it in the JSX
const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
