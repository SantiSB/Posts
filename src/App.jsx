import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import StoreProvider from "./store/StoreProvider";

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
