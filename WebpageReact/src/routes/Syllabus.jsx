import React, { useEffect, useState } from "react";
import TAData from "../JSONfile/TAs.json";
//import { Component } from 'react';
//import ReactMarkdown from "react-markdown";
// import syllabus from "../routes/Syllabus.md";


function Syllabus() {

  return(
    <>
      <h1>CSCI-4470-01</h1>
      <h2>Open Source Software Spring Semester 2022</h2>
      <p>Open Source has been taught at RPI since Fall of 2007 (taught jointly by Dr. William Shroeder and Dr. Luis Ibanez) as a 4000 level class, and then by Mukkai Krishnamoorthy as a 2000 level class. We will continue this tradition by offering it as a 4000 level course.</p>
      <p>In the spirit of Open Source, all of the course notes are available online  in Github: <a href="https://github.com/rcos/CSCI-4470-OpenSource">https://github.com/rcos/CSCI-4470-OpenSource</a>.</p>
      <h2>Licensing And Credit</h2>
      <ul>
        <li>Licensed under: CC-BY-SA 4.0 <a href="https://creativecommons.org/licenses/by-sa/4.0/">https://creativecommons.org/licenses/by-sa/4.0/</a>
        </li>
        <li>Our Lecture Slides have greatly benefited from the previous classes taught by Dr. William Schroeder and Dr. Luis Ibanez at RPI,
        </li>
        <li>And by Professor Mukkai Krishnamoorthy who succeeded them in teaching the course
        </li>
      </ul>
      <p><strong>We are extremely thankful to RedHat for their generous support. Thanks to Mr. Tom Callaway and Ms. Gina Likins for their valuable advice and suggestions.</strong></p>
      <h1>People</h1>
      <h2>Professor</h2>
      <hr></hr>
      <h2>TAs</h2>
      <hr></hr>
      {
        TAData.map((TA) =>{
          if(TA.type == "TA"){
            return(
              <>
                <p>{TA.name}</p>
                <ul>
                  <li>Email: <a href={TA.email}>{TA.email}</a></li>
                  <li>WebEx: <a href={TA.webex}>{TA.webex}</a></li>
                  <li>Office Hours: {TA.officehours}</li>
                </ul>
                <hr></hr>
              </>
            )
          }
        })
      }
      <h2>Mentors</h2>
      {
        TAData.map((TA) =>{
          if(TA.type == "mentor"){
            return(
              <>
                <p>{TA.name}</p>
                <ul>
                  <li>Email: <a href={TA.email}>{TA.email}</a></li>
                  <li>WebEx: <a href={TA.webex}>{TA.webex}</a></li>
                  <li>Office Hours: {TA.officehours}</li>
                </ul>
                <hr></hr>
              </>
            )
          }
        })
      }
    
      <p>The course will meet in <strong>Sage 5510</strong> on Tuesdays and Fridays from 10:30pm - 12:35pm. Class discussions are an important part of the lecture and the labs so attendance is required. If you are temporarily unable to attend because of quarantine or other health issues, please contact Prof. Turner and make alternate arrangements.</p>
      <h2>Online LMS and the use of Submitty</h2>
      <p>This course <strong>will not</strong> use the RPI Blackboard LMS. Instead, we will use <strong>Submitty</strong> a course management tool developed as an opensource project under <strong>RCOS</strong> and the creative and technical auspices of Prof. Barbara Cutler. If you are registered in the course, you may access it at <a href="https://submitty.cs.rpi.edu/courses/u22/csci4470">https://submitty.cs.rpi.edu/courses/u22/csci4470</a>. If you do not have access, please email the TA or the Professor.</p>
      <h2 >Goal of this Class:</h2>
      <ul>
        <li>Familiarize students with open source software development</li>
        <li>Have them be familiar with and eager to learn new technology stacks</li>
        <li>Able to Read and Understand Good Code.</li>
        <li>Patch an existing open source project. </li>
        <li>Work on a team collaborative project. </li>
        <li>Become aware of and conversant in team project and diversity issues. </li>
        <li>Prepare a new RCOS project for the following semester.</li>
      </ul>
      <h2>Learning Outcomes:</h2>
      <p>The goal of this course is to provide a strong foundation in open source software development in preparation for jobs in industry or for more advanced courses. After completing this course, the student will be able to:</p>
      <ul>
        <li>Articulate the importance of open-source tools in the technology sphere along with the importance of community in generating understanding of Open Source Software Tools and Community</li>
        <li>Effectively use and communicate the different varieties of Open Source Licensing.</li>
        <li>Effectively establish and use Testing and Version Control in an open source project.</li>
        <li>Demonstrate competence with Common Open Source Software Stacks and common tools.</li>
      </ul>
      <h2>Syllabus:</h2>
      <ol>
        <li><p>Foundations</p>
        <ul>
        <li>History of Open Source</li>
        <li>Licensing</li>
        </ul>
        </li>
        <li><p>Software Management Tools</p>
        <ul>
        <li>Version Control</li>
        <li>Documentation Tools</li>
        <li>System Build</li>
        <li>Specification and Testing</li>
        <li>Collaborative Development</li>
        </ul>
        </li>
        <li>Software Development Tools and Paradigms
        <ul>
        <li>Scientific Computing</li>
        <li>Statistical Computing</li>
        <li>Databases</li>
        </ul>
        </li>
        <li><p>Software Applications</p>
        <ul>
        <li>Web Development</li>
        <li>Cloud Computing Platform</li>
        <li>Mobile Applications</li>
        </ul>
        </li>
        <li><p>Topics of interest (Open Hardware, Tensor Flow, etc.)</p>
        </li>
        <li><p>Projects</p>
        </li>
      </ol>
      <h2>Grading Criteria:</h2>
      <ul>
      <li>2 Quizzes (10 points each) - 20%</li>
      <li>Open Source Project Analysis Paper - 10%</li>
      <li>9 Labs (3.75 points each/drop lowest) - 30%</li>
      <li>Project - 40%</li>
      </ul>
      <h2>Test Dates</h2>
      <ul>
      <li>Quiz 1 1st July</li>
      <li>Quiz 2 9th August</li>
      </ul>
      <h2>Open Source Paper Due</h2>
      <ul>
      <li>24th June</li>
      </ul>
      <h2>Grade Distribution</h2>
      <ul>
      <li>93 and above A</li>
      <li>90 and above A-</li>
      <li>87 and above B+</li>
      <li>83 and above B</li>
      <li>80 and above B-</li>
      <li>77 and above C+</li>
      <li>73 and above C</li>
      <li>70 and above C-</li>
      <li>67 and above D+</li>
      <li>60 and above D</li>
      </ul>
      <h2>Community:</h2>
      <p>Please join our discord server <strong>OSS-Summer2022</strong> at <a href="https://discord.gg/5WEv84aGDz">https://discord.gg/5WEv84aGDz</a>.</p>
      <h2>Policies</h2>
      <p>These will be designated by the instructor in advance to the student and will deal with the following issues. </p>
      <h3>Lateness</h3>
      <p>Late submissions receive a penalty of 10% with an additional 10% penalty (20% total) for up to a week late. Assignments are not generally accepted more than one week late. </p>
      <h3>Class participation</h3>
      <p>Regular attendance and participation is expected.</p>
      <h3>Attendance</h3>
      <p>Regular attendance and participation is expected. </p>
      <h3>Missed exams or assignments:</h3>
      <p>A formal excused absence is required to make up a missed assignment or to turn in an assignment after the due date.</p>
      <h2>Integrity</h2>
      <p>Student-teacher relationships are built on trust. For example, students must trust that teachers have made appropriate decisions about the structure and content of the courses they teach, and teachers must trust that the assignments that students turn in are their own. Acts that violate this trust undermine the educational process.</p>
      <p>In this course, collaboration in your project group (3 or 4 students) is allowed, but should not be abused. Do not copy blindly. Labs and Quizzes should be solved and written by individuals alone. If anyone is caught cheating, severe measures will be taken such as lowering the final grade, and the event will be reported to the appropriate authorities in the campus.</p>
      <p>The Rensselaer Handbook of Student Rights and Responsibilities and the Graduate Student Supplement (For 6000 level and above courses) define various forms of Academic Dishonesty and you should make yourself familiar with these. All assignments that are turned in for a grade must represent the student’s own work. In cases where help was received, or teamwork was allowed, a notation on the assignment should indicate your collaboration. Submission of any assignment that is in violation of this policy will result in (1) an academic (grade) penalty and (2) reporting to the Dean of Academic Affairs and either the Dean of Students (for Undergraduates) or the Dean of Graduate Education (for Graduate students).</p>
      <p>In this course, the academic penalty for a first offense is loss of a letter grade. A second offense will result in failure of the course.
      If you have any questions concerning this policy before submitting an assignment, please ask for clarification.</p>


    </>
  );
}
export default Syllabus;