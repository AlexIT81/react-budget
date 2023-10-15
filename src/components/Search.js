import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

export const Search = () => {
  const {dispatch, expenses } = useContext(AppContext);
  const [query, SetQuery] = useState("");

  useEffect(() => {
      dispatch({
        type: "SEARCH",
        payload: query,
      });
  }, [query, expenses])
  
  return (
    <input
      className="form-control"
      name="search"
      type="text"
      value={query}
      onChange={(e) => SetQuery(e.target.value)}
      placeholder="Search"
    />
  );
};
