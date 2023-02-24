import React, { Component } from 'react';

function NavBar() {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <ul class="navbar-nav mr-auto ">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="syllabus.jsx">Syllabus</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="schedule.html">Schedule</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="modules.html">Modules</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="assignment.html">Assignment</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="discussion.html">Discussion Forum</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="tmp.html">Test</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

 
export default NavBar;