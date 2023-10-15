import React, { useContext } from "react";
import { ExpenseItem } from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

export const ExpenseList = () => {
  const { searchExpenses, expenses } = useContext(AppContext);
  return (
    <ul className="ps-0">
      { expenses.length > 0 ? searchExpenses.length > 0 ? (
        searchExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))
      ) : (
        <li className="mt-1 rounded-3 border list-group-item d-flex justify-content-between align-items-center p-2">
          Nothing found!
        </li>
      ) : (
        <li className="mt-1 rounded-3 border list-group-item d-flex justify-content-between align-items-center p-2">
        No expenses!
      </li>
      )}
    </ul>
  );
};
