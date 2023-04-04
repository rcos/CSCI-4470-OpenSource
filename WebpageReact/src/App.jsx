import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './routes/Home';
import Syllabus from './routes/Syllabus';
import Modules from './routes/Modules';
import test from './routes/test';
import Assignments from './routes/Assignments';
import Resources from './routes/Resources';
import Discussion from './routes/DiscussionForum';
import { useState, useEffect } from 'react';

function App() {
  const paths = {
    "/": <Home />,
    "/syllabus": <Syllabus />,
    "/test": <test />,
    "/assignments": <Assignments />,
    "/resources": <Resources />,
    "/discussion": <Discussion />
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
