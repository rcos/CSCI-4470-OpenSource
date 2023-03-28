import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Syllabus from './routes/Syllabus';
import Modules from './routes/Modules';
import Assignments from './routes/Assignments';
import Resources from './routes/Resources';
import Discussion from './routes/DiscussionForum';
import { useState, useEffect } from 'react';

function App() {
  const paths = {
    "/": <Home />,
    "/syllabus": <Syllabus />,
    "/modules": <Modules />,
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
      {component}
    </>

  );
}

export default App
