// Front-end/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prueba from './components/Prueba';

function App() {
  return (
    <Router>
      <div>
        <h1>Hola Mundo</h1>
        <Routes>
          <Route path="/prueba" element={<Prueba />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
