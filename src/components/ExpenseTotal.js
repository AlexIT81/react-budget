import React, {useContext} from 'react'
import { AppContext } from "../context/AppContext";

export const ExpenseTotal = () => {
  const {budget, expenses} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost)
}, 0)

  const alertType = budget > totalExpenses ? "alert-primary" : "alert-danger";


  return (
    <div className={`alert ${alertType} h-100 d-flex align-items-center`}>
      <span>Spent so far: {totalExpenses}$</span>
    </div>
  )
}
