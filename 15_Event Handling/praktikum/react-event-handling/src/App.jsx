
import './App.css'
import Button from './components/button';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import CreateProduct from './pages/create-product'

function App() {
 
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateProduct></CreateProduct>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
