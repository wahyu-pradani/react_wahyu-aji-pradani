import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import {Link, BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { PAGE_URL } from './helper/contanst';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGE_URL.HOME} element={<Home></Home>}></Route>
        <Route path={PAGE_URL.ABOUT} element={<About></About>}></Route>
        <Route path={PAGE_URL.CONTACT} element={<Contact></Contact>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
