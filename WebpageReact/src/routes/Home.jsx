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
      Professor: 
      TAs:
      Mentors:
      <Footer />
    </>
  )
}

export default Home;