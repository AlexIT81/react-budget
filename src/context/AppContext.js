import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      let filteredExpenses = state.expenses.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        expenses: filteredExpenses,
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    case "SEARCH":
      return {
        ...state,
        searchExpenses: state.expenses.filter((item) => item.name.toLowerCase().includes(action.payload.toLowerCase()))
      }
    default:
      return state;
  }
};

const initialState = {
  budget: 7000,
  expenses: [
    { id: 1, name: "Shopping", cost: 500 },
    { id: 2, name: "Living", cost: 1000 },
    { id: 3, name: "Traveling", cost: 2000 },
    { id: 4, name: "Car", cost: 700 },
    { id: 5, name: "Eat", cost: 800 },
  ],
  searchExpenses: [],
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
        searchExpenses: state.searchExpenses
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
