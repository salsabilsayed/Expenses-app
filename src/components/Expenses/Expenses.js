import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props){
  const [filteredYear,setFilteredYear] = useState('2020');

  const getSelectedYear = year => {
    setFilteredYear(year);
    
  }

  const filteredItems = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return(
      <div>
       
        <Card className='expenses'>
        <ExpensesFilter onSelectYear={getSelectedYear} selected={filteredYear}/>

          <ExpensesChart expenses={filteredItems}/>
          <ExpensesList items={filteredItems}/>
          
        </Card>
      </div>
    )
}

export default Expenses;