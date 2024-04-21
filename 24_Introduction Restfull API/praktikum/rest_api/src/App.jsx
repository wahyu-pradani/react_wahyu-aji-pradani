import { useState } from 'react'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import CreateProduct from './pages/Product';
import Detail from './pages/Detail';
import Home from './pages/Home';
import LoginPage from './pages/login';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/form" element={<CreateProduct></CreateProduct>}></Route>
          <Route path="/detail/:id" Component={Detail} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
