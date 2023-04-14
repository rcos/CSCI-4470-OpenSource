import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImg from '../components/HeroImg';
import '../styles/Home.css';

function Home () {
  return (
    <>
      <h3>CSCI 4470: Open Source Software</h3>
      <p>Open Source has been taught at RPI since Fall of 2007 <br></br>(taught jointly by Dr. William Shroeder and Dr. Luis Ibanez)
         as a 4000 level class, and then by Mukkai Krishnamoorthy as a 2000 level class. <br></br>We will continue this tradition by 
         offering it as a 4000 level course.</p>
      <HeroImg />
    </>
  )
}

export default Home;