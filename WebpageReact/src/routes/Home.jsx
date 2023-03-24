import NavBar from "../components/NavBar";
import Page from "../components/Page";
import Footer from "../components/Footer";

function Home () {
  return (
    <>
      <NavBar />
      <Page 
        cName="page"
        title="Open Source Software"
        text="Unlocking Innovation with Open Source"
      />
      <Footer />
    </>
  )
}

export default Home;