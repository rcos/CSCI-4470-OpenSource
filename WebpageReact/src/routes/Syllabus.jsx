import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
/* react package that displays markdown text
 * NOTE - need to have react-markdown installed 
 * for this to work: do npm install react-markdown
 */
import ReactMarkdown from 'react-markdown';

function Syllabus () {
  // load text from Syllabus.md into a string
  // to be displayed on the site
  const syllabus = '';
  useEffect(() => {
    fetch("../../../Syllabus.md")
      .then(response => response.text())
      .then(text => {syllabus = text});
  }, []);

  return (
    <>
      <NavBar />
      <ReactMarkdown source={syllabus}/>
      <Footer />
    </>
  )
  }
  
export default Syllabus;