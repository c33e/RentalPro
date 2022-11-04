import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"
import Test from "./Test"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
