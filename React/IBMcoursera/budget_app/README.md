# coding-project-template

## App.js
Creating a reducer used to update the state based on the action.
    Set initial state for departments.
    Provider component which wraps the components we eant to give access to the state.
    Adding an initial budger, creating Provider component, setting up the useReducer hook which will hold the stat and allow to update the state via dispatch

## Budget.js
Text and value for the budget. Imports app context and the useContext hook and pass the AppContext to it.

## Remaining.js
Importing expernse and budget from context and get the value using substraction.

## ExpenseTotal.js
Using useContext and AppContext. Taking expenses from state.

## ExpenseList.js
Using the map function to display the Expenseitem component.

## ExpenseItem.js
Importing dispatch from Context, which allows to dispatch a delete action, creating a function that gets called when the delete icon is clicked.

## AllocationForm.js
Creating an expense object, containing the name and the cost. This gets dispatched as the payload and what is used to update the state.

