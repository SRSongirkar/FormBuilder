import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import UserForm from './Pages/UserForm';
import PreviewPage from './Pages/PreviewPage';
import "./App.css"

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route  path="/new-form" element={<UserForm />} />
          <Route path="/PreviewPage" element={<PreviewPage/>} />
        </Routes>
      </div>
  );
}

export default App;
