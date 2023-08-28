
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './containers/home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<Home />} />
      </Routes>
      </BrowserRouter>
  )
}



export default App;
