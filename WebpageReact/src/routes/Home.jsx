import Page from "../components/Page";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/Footer.css';

function Home () {
  return (
    <>
      <NavBar />
      <Page 
        cName="page"
        title="Open Source Software"
        text="Unlocking Innovation with Open Source"
      />
      <div className="course">
        <h3>Course Description</h3>
        <p>
          This course will introduce students to the world of open source software.
          Students will learn about the history of open source software, the
          benefits of open source software, and the different types of open source
          licenses. Students will also learn about the different types of open source
          projects and how to contribute to open source projects. Students will
          participate in a semester long open source project and will learn about
          the different roles in open source projects. 
        </p>
        
      </div>
      <Footer />
    </>
  )
}

export default Home;