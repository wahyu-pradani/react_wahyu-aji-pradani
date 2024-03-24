
import './App.css'
import Button from './components/button';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import CreateProduct from './pages/create-product'
import { useState, useEffect } from 'react';
import Table from './pages/create-product/table';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateProduct></CreateProduct>}></Route>
          <Route path="/Table" element={<Table></Table>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
