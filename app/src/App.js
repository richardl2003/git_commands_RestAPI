import './App.css';
import React from 'react'
import Home from './components/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ConceptList from './components/ConceptList'; 
import EditConcept from './components/EditConcept';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/concepts" exact={true} element={<ConceptList />} />
        <Route path="/concepts/:id" element={<EditConcept />} />
      </Routes>
    </Router>
  )
}

export default App;
