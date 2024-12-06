import React, { createContext, useReducer } from "react";
import { isLoggedIn } from "./axiosClient";

// Create a reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true };
    case "LOGOUT":
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

// Initial state
const initialState = {
  isAuthenticated: isLoggedIn(),
};

// Create context with useReducer
export const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
