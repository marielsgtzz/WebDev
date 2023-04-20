import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

//Using the reduce function to get a total of all the costos, assigning this to a variable and 
//displaying it in the JSX. 
//Whenever the user adds an expense, the state updates which will cause all components connected
//to the context to re-render and update themselves with new values.
const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;