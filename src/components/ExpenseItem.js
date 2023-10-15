import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TiDelete } from "react-icons/ti";
import "bootstrap/dist/css/bootstrap.min.css";

export const ExpenseItem = ({ id, name, cost }) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  };

  return (
    <li className="mt-1 rounded-3 border list-group-item d-flex justify-content-between align-items-center p-2">
      {name}
      <div>
        <span className="badge bg-primary me-2">{cost}$</span>
        <TiDelete
          size="25px"
          onClick={() => handleDelete()}
          style={{ cursor: "pointer" }}
        ></TiDelete>
      </div>
    </li>
  );
};
