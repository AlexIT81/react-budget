import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [cost, setCost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEdit(false);
    dispatch({
      type: "SET_BUDGET",
      payload: cost,
    });
    setCost('');
  };

  return (
    <div className="alert alert-secondary d-flex justify-content-between align-items-center h-100">
      {isEdit && (
        <>
          <form onSubmit={handleSubmit} className="w-100 d-flex justify-content-between align-items-center">
            <input
              type="number"
              name="cost"
              className="form-control me-3"
              value={cost || ""}
              onChange={(e) => setCost(e.target.value)}
              required
            />
            <button
              type="submit"
              className="btn btn-primary"
            >
              Save
            </button>
          </form>
        </>
      )}
      {!isEdit && (
        <>
          <span>Budget: ${budget}</span>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};
