import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const dummyExpenses = [
  {
    id:'e1',
    title:'Toilet Paper',
    amount: '94.12',
    date: new Date(2020,6,15)
  },
  {
    id:'e2',
    title:'New Tv',
    amount: '799.49',
    date: new Date(2020, 2, 12)
  },
  {
    id:'e3',
    title:'Car Insurance',
    amount: '294.67',
    date: new Date(2021, 4, 26)
  }
]

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = expense =>{
      setExpenses(prevExpenses => {
        return [expense, ...prevExpenses];
      })
  }
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
