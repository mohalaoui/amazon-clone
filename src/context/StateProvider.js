import React, { createContext, useReducer, useContext } from "react";


// data layer
export const StateContext = createContext();

// provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);
