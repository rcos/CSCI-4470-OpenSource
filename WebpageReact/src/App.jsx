import { useState } from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App
