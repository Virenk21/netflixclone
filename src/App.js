import { Route, Routes } from 'react-router-dom';
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
