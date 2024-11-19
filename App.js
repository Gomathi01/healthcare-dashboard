import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Submissionlist from './components/Submissionlist';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
       <Header />
       <Routes>
        <Route path="/" element={<Submissionlist />} />
      </Routes>
    </Router>
  );
};

export default App;
