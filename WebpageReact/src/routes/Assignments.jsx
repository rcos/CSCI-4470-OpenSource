import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import React, { useState } from "react";
import Collapsible from 'react-native-collapsible';
import '../styles/Assignments.css';

function Assignments () {
    return (
      <>
        <NavBar />
        <div className="container">          
           <div className="AnalysisHW">
              <h3>Analysis HW</h3>
           </div>
        </div>
        <Footer />
      </>
    )
}
  
  export default Assignments;