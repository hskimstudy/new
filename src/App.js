import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Gerne from './Gerne';
import Age from './Age';
import Cookie from './Cookie';
import Gender from './Gender'
import Occupation from './Occupation'
import Result from './Result'
import ExplainResult0 from './ExplainResult0'

function App() {


  return (

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Gerne" element={<Gerne />} />
      <Route path="/Result" element={<Result />} />
      <Route path="/ExplainResult0" element={<ExplainResult0 />} />
    </Routes>

  );
}

export default App;
