import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/Footer.css';
import '../styles/ModuleStyle.css'
import React, { useState, useEffect, Button } from "react";

function Modules () {
    /* once this component is loaded, a script tag containing the
     * code in moduleScript.js is inserted in the webpage body
     */ 
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "moduleScript.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);
    
    return (
      <>
        {/* <Page 
            cName="ModulePage"
            title="Course Modules"
            text="Below are the modules for the course.
                  Each module contains important links and files
                  for the different parts of the course. Check this page often!"
        /> */}
        <button className='collapsible'>01. Introduction</button>
        <div className = 'content'>
            <ul>
                <li><a href="https://github.com/rcos/CSCI-4470-OpenSource/tree/master/Modules/01.Introduction/History">History</a></li>
                <li><a href="https://github.com/rcos/CSCI-4470-OpenSource/tree/master/Modules/01.Introduction/Linux">Linux</a></li>
            </ul>
        </div>
        
        <button className='collapsible'>02. Git</button>
        <div className='content'>
            <ul>

                <li><a href="../../../Modules/02.Git/Git-Introduction-Part-I/index.html">Git Introduction Part 1</a></li>
                <li><a href="../../../Modules/02.Git/Git-Introduction-Part-II/index.html">Git Introduction Part 2</a></li>
                <li><a href="../../../Modules/02.Git/cheat_sheet_git_final.pdf">Git Cheat Sheet</a></li>
            </ul>
        </div>
        <button className='collapsible'>03. Documentation & Community</button>
        <div className='content'>
            <ul>
                    <li><a href='../../../Modules/03.DocumentationAndCommunity/Documentation.html'>Documentation</a></li>
                    <li><a href='../../../Modules/03.DocumentationAndCommunity/Community.html'>Community</a></li>
                    <li><a href='https://github.com/rcos/CSCI-4470-OpenSource/blob/master/Modules/03.DocumentationAndCommunity/Lab-DocumentationAndCommunity.md'>Lab</a></li>
            </ul>
        </div>
        <button className='collapsible'>04. Licensing</button>
        <div className='content'>
            <ul>
            <li><a href='https://github.com/rcos/CSCI-4470-OpenSource/blob/master/Modules/04.Licensing/Lab-Licensing.md'>Licensing Lab</a></li>
            <li><a href ='../../../Modules/04.Licensing/Licensing-S2021-RPI-PatrickMasson-Shortform-RCOS.pdf' >Licensing Slides</a></li>
            </ul>
        </div>
        <button className='collapsible'>05. Build Systems</button>
        <div className='content'>
            <ul>
                <li><a href ='../../../Modules/05.BuildSystems/source/index.rst' >Slides</a></li>
            </ul>
        </div>
        <button className='collapsible'>06. Scientific Computing</button>
        <div className='content'>
            <ul>
                <li><a href ='../../../Modules/06.ScientificComputing/index.html' >Slides</a></li>
                <li><a href="https://github.com/rcos/CSCI-4470-OpenSource/blob/master/Modules/06.ScientificComputing/Lab-ScientificComputing.md">Lab</a></li>
            </ul>  
        </div>
        <button className='collapsible'>07. Satistical Computing</button>
        <div className='content'>
            <ul>
                <li><a href = "../../../Modules/07.StatisticalComputing/index.html">Slides</a></li>
                <li><a href="https://github.com/rcos/CSCI-4470-OpenSource/blob/master/Modules/07.StatisticalComputing/Lab-StatisticalComputing.md">Lab</a></li>
            </ul>  
        </div>
        <button className='collapsible'>08. Testing and CI</button>
        <div className='content'>
            <ul>
                <li><a href = "../../../Modules/08.TestingAndCI/Integration.html">Integration</a></li>
                <li><a href="https://github.com/rcos/CSCI-4470-OpenSource/tree/master/Modules/08.TestingAndCI">Repository Link</a></li>
            </ul>  
        </div>
        <button className='collapsible'>09. Virtualization</button>
        <div className='content'>
            <ul>
                <li><a href="https://github.com/rcos/CSCI-4470-OpenSource/blob/master/Modules/09.Virtualization/Lab-Virtualization.md">Lab</a></li>
                <li><a href='../../../Modules/09.Virtualization/source/index.rst'>Slides</a></li>
            </ul>  
        </div>
        <button className='collapsible'>10. Databases</button>
        <div className='content'>
            <ul>
                <li><a href ='../../../Modules/10.Databases/MongoDB_Shell_Cheat_Sheet.pdf'>MongoDB Cheat Sheet</a></li>
                <li><a href='../../../Modules/10.Databases/source/index.rst'>Slides</a></li>                            
            </ul>  
        </div>
        <button className='collapsible'>11. Tensorflow</button>
        <div className='content'>
            <ul>
                <li><a href="https://github.com/rcos/CSCI-4470-OpenSource/blob/master/Modules/11.TensorFlow/Lab-TensorFlow.md">Lab</a></li>
                <li><a href='../../../Modules/11.TensorFlow/source/index.rst'>Slides</a></li>
            </ul>  
          </div>
      </>
    )
  }
  
export default Modules;