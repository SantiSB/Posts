import { createContext, useReducer } from "react";
import storeReducer, { initialStore } from "./StoreReducer";

/**
 * Creación del contexto de la aplicación
 */
const StoreContext = createContext();

/**
 * Esta función representa el Provider que utilizaremos para envolver la aplicación y proporcionar un estado global
 * @param {Component} children representa el componente hijo que será envuelto por el provider
 * @returns 
 */
const StoreProvider = ({ children }) => {
  /**
   * useReducer nos permite crear un estado con una función actualizadora
   * store: Es donde almacenamos los datos en el estado Global
   * dispatch: Es la función que permite enviar información al store para actualizarlo
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
