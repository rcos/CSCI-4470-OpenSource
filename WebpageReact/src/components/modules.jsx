import React from 'react';
import ReactDOM from 'react-dom/client';

//react component for the course modules, using the same css and
//layout as the
class Modules extends Component{
    render(){
        return(
            <div>
                <h3>Modules</h3>
                <ul>
                    <li>01. Introduction
                        <ul>
                            <li><a href="https://github.com/rcos/CSCI-4470-OpenSource/tree/master/Modules/01.Introduction/History">History</a></li>
                            <li><a href="https://github.com/rcos/CSCI-4470-OpenSource/tree/master/Modules/01.Introduction/Linux">Linux</a></li>
                        </ul>
                    </li>
                    <li>02. Git
                        <ul>
                            <li><a href="../../../Modules/02.Git/Git-Introduction-Part-I/index.html">Git Introduction Part 1</a></li>
                            <li><a href="../../../Modules/02.Git/Git-Introduction-Part-II/index.html">Git Introduction Part 2</a></li>
                            <li><a href="../../../Modules/02.Git/cheat_sheet_git_final.pdf">Git Cheat Sheet</a></li>
                        </ul>
                    </li>
                    <li>03. Documentation & Community
                        <ul>
                            <li><a href='../../../Modules/03.DocumentationAndCommunity/Documentation.html'>Documentation</a></li>
                            <li><a href='../../../Modules/03.DocumentationAndCommunity/Community.html'>Community</a></li>
                            <li><a href='https://github.com/rcos/CSCI-4470-OpenSource/blob/master/Modules/03.DocumentationAndCommunity/Lab-DocumentationAndCommunity.md'>Lab</a></li>

                        </ul>
                    </li>
                    <li>04. Licensing
                        <ul>
                            <li><a href='https://github.com/rcos/CSCI-4470-OpenSource/blob/master/Modules/04.Licensing/Lab-Licensing.md'>Licensing Lab</a></li>
                            <li><a href ='../../../Modules/04.Licensing/Licensing-S2021-RPI-PatrickMasson-Shortform-RCOS.pdf' >Licensing Slides</a></li>
                        </ul>                        
                    </li>
                    <li>05. Build Systems
                        <ul>
                            <li><a href ='../../../Modules/05.BuildSystems/source/index.rst' >Slides</a></li>
                        </ul>  
                    </li>
                    <li>06. Scientific Computing
                        <ul>
                        <li><a href ='../../../Modules/06.ScientificComputing/index.html' >Slides</a></li>
                        <li><a href="https://github.com/rcos/CSCI-4470-OpenSource/blob/master/Modules/06.ScientificComputing/Lab-ScientificComputing.md">Lab</a></li>
                        </ul>  
                    </li>
                    <li>07. Satistical Computing
                        <ul>
                            <li><a href = "../../../Modules/07.StatisticalComputing/index.html">Slides</a></li>
                            <li><a href="https://github.com/rcos/CSCI-4470-OpenSource/blob/master/Modules/07.StatisticalComputing/Lab-StatisticalComputing.md">Lab</a></li>
                        </ul>  
                    </li>
                    <li>08. Testing and CI
                        <ul>
                            <li><a href = "../../../Modules/08.TestingAndCI/Integration.html">Integration</a></li>
                            <li><a href="https://github.com/rcos/CSCI-4470-OpenSource/tree/master/Modules/08.TestingAndCI">Repository Link</a></li>
                        </ul>  
                    </li>
                    <li>09. Virtualization
                        <ul>
                        <li><a href="https://github.com/rcos/CSCI-4470-OpenSource/blob/master/Modules/09.Virtualization/Lab-Virtualization.md">Lab</a></li>
                        <li><a href='../../../Modules/09.Virtualization/source/index.rst'>Slides</a></li>
                        </ul>  
                    </li>
                    <li>10. Databases
                        <ul>
                        <li><a href ='../../../Modules/10.Databases/MongoDB_Shell_Cheat_Sheet.pdf'>MongoDB Cheat Sheet</a></li>
                            <li><a href='../../../Modules/10.Databases/source/index.rst'>Slides</a></li>                            
                        </ul>  
                    </li>
                    <li>11. Tensorflow
                        <ul>
                        <li><a href="https://github.com/rcos/CSCI-4470-OpenSource/blob/master/Modules/11.TensorFlow/Lab-TensorFlow.md">Lab</a></li>
                        <li><a href='../../../Modules/11.TensorFlow/source/index.rst'>Slides</a></li>
                        </ul>  
                    </li>
                </ul>
            </div>
        );
    }
}
export default Modules;