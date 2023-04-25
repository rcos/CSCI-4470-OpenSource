import './App.css';
import NavBar from './components/navBar';
import Footer from './components/Footer';
import Home from './routes/Home';
import Syllabus from './routes/Syllabus';
import Modules from './routes/Modules';
import Assignments from './routes/Assignments';
import Resources from './routes/Resources';
import testRenderHTML from './routes/testRenderHTML';
import { useState, useEffect } from 'react';

function App() {
  const paths = {
    "/": <Home />,
    "/syllabus": <Syllabus />,
    "/test": <testRenderHTML />,
    "/assignments": <Assignments />,
    "/resources": <Resources />,
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
