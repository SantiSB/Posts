import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import StoreProvider from "./store/StoreProvider";

/**
 * Esta función representa el componente principal de la aplicación
 * @returns StoreProvider: Envuelve las rutas de la aplicación para proveer un estado Global
 */
function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
