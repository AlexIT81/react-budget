import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const Remaining = () => {
  const { budget, expenses } = useContext(AppContext);

  const setRemaining = () => {
    const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);
    return budget - totalExpenses;
  };

  const alertType = setRemaining() > 0 ? "alert-success" : "alert-danger";

  return (
    <div className={`alert ${alertType} h-100 d-flex align-items-center`}>
      <span>Remaining: {setRemaining()}$</span>
    </div>
  );
};
