import { createContext, useReducer } from "react";
import storeReducer, { initialStore } from "./StoreReducer";

/**
 * Create the application context
 */
const StoreContext = createContext();

/**
 * This function represents the Provider that we will use to wrap the application and provide a global state
 * @param {Component} children represents the child component that will be wrapped by the provider
 * @returns
 */
const StoreProvider = ({ children }) => {
  /**
   * useReducer allows us to create a state with an updater function
   * store: It is where we store the data in the Global state
   * dispatch: It is the function that allows sending information to the store to update it
   */
  const [store, dispatch] = useReducer(storeReducer, initialStore);
  return (
    <StoreContext.Provider value={[store, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext };
export default StoreProvider;
