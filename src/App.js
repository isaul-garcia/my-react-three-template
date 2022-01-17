import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;