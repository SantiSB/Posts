import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import StoreProvider from "./store/StoreProvider";

/**
 * Esta función representa el componente principal de la aplicación
 * @returns StoreProvider: Envuelve las rutas de la aplicación para proveer un estado Global
 */
function App() {
  return (
    <StoreProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
        </Routes>
      </HashRouter>
    </StoreProvider>
  );
}

export default App;
