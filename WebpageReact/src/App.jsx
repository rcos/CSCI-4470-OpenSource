//import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './routes/Home';
import Syllabus from './routes/Syllabus';
import Modules from './routes/Modules';
import Assignments from './routes/Assignments';
import Resources from './routes/Resources';
import { useState, useEffect } from 'react';
import test from './routes/test';

function App() {
  const paths = {
    "/": <Home />,
    "/syllabus": <Syllabus />,
    "/modules": <Modules />,
    "/assignments": <Assignments />,
    "/resources": <Resources />,
    // "/test": <test />
  }

  let [component, setComponent] = useState(<Home />);

  useEffect(() => {
    const path = window.location.pathname;
    if (path in paths) {
      setComponent(paths[path]);
    } else {
      setComponent(<Home />);
    }
  }, []);
  return (
    <>
      <NavBar />
      {component}
      <Footer />
    </>

  );
}

export default App
