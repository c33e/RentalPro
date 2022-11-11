import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"
import Test from "./Test"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import useToken from './useToken';


function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Auth setToken={setToken} />
  }

  return (
    <div className="wrapper">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
