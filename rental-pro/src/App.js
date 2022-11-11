import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"
import Home from "./Home"
import Rent from "./rent"
import Profile from "./profile"
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
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
