import './App.css';
import React from 'react'
import Home from './components/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ConceptList from './components/ConceptList'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/concepts" exact={true} element={<ConceptList />} />
      </Routes>
    </Router>
  )
}

export default App;
