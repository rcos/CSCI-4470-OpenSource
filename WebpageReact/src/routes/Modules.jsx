import '../styles/ModuleStyle.css';
// json file containing links for each module
import moduleData from '../JSONfile/ModulesData.json';
import React from 'react';
import Collapsible from 'react-collapsible';

function Modules () {
    return (
    <>
    <h3>Course Modules </h3>
      <p>Here are the modules for the course. Click on a module for links to important material
        like labs, slides, and exercises. </p>
    {moduleData.map((item) => {
        return (<Collapsible trigger={item.title}>
                <ul>
                    {item.links.map(link => {
                        return(
                            <li><a href ={link.link}>{link.linkName}</a></li>
                        );
                    })}
                </ul>
        </Collapsible>)
    })}
    </>
    )
}
  
export default Modules;