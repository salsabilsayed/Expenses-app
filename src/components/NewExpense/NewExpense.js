import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = props => {
    const saveEnteredData = enteredData => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    const [isEditing, setIsEditing] = useState(false);
    const appearHandler = () =>{
        setIsEditing(true);
    }

    const hideFormHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button type='button' 
            onClick={appearHandler}>Add New Expense</button>}
            
            {isEditing && <ExpenseForm onSaveChanges={saveEnteredData}
            hideFormHandler={hideFormHandler}/>}
            
           
        </div>
    )
}

export default NewExpense;