##Study Guide for Quizzes

#Quiz 1 - Friday 2/24/17

Quiz one will cover all of the lectures and labs we have done so far up to and including Lab 5
(See [Spring2017Schedule.md](Spring2017Schedule.md) for more info).
Format will be some multiple choice questions and some free response (see previous example test posted
in the slack channel). Review all lecture/guest lecture notes and all labs. Make sure
you have a solid understanding of how Github works.

For this quiz I would recommend having the following software installed beforehand.

[Python](https://www.python.org/downloads/)

[Latex](https://www.latex-project.org/get/)

For the lecture Bill Hoffman presented on CMake, use the [OFFLINE](HTML Lectures/Lecture-Build-Systems/source/index.html) version of it.

Additionally since this quiz is open notes (but closed internet), I would recommend bringing whatever notes you have
taken to the quiz as well as cloning the class repository(git clone https://github.com/rcos/CSCI2963-01-Spring2017.git).
You can then access all the lecture notes from the HTML Lectures folder. You can go to the HTML Lectures/index.html
and open all of the lecture notes from there.

Make sure all of your lab code is on your local computer as you are allowed to refer to it during the quiz/may
find it helpful to do so.
	
Topics that I would review for the quiz are:

* Principles of Open Source (What is the definition of Open Source? What are the Four Freedoms of Open Source?)

* Know CMake and what is going on when you use it (Review [Build Systems Lecture](HTML Lectures/Lecture-Build-Systems/source/index.html))

* Why is it important to have community? 

* Why is documentation important?

* Why is testing important? 

* Given a program, implement a new feature or add unit tests (know how to do both)

* Know how to analyze a program (describe what is going on in a program)

* Know the basic flow of github/git from the command line (Review [GitHub Tutorial](https://try.github.io/levels/1/challenges/1))
	* Basic flow is add->commit->push
	* Know how branching works and what checkout command does
	* Know how pull requests works

* Know what is a merge conflict, how it can arise and how to resolve it.

* Know how to solve and write Regular Expressions (RegEx) (Review [RegEx Tutorial](https://regexone.com/))

* Why is it important to choose a license? What are some licenses and what advantages or disadvantages do they have
	compared to others?

* Given a mathematical expression or equation know how to write it in Latex

If you have any more questions feel free to contact the Undergraduate Programming Mentors
or Professor Moorthy (preferably on the slack channel) before the quiz! Good luck everyone!

Sample Questions - 

Find the bugs in the [testing](testing.cpp) program. If you want to
run this, compile using with the -std=c++11 flag (g++ -std=c++11 testing.cpp -o main.exe). How could you write
unit tests to easily identify these bugs? Write a prev and next function and
write unit tests for them. Prev/Next should choose the previous and next
days from the starting vector based on the current day
selected (Be careful about edge cases!). For example if I have "WEDNESDAY" currently selected prev()
should give me "TUESDAY" and next() should give me "THURSDAY". If I have "SUNDAY" selected
next() should give me "MONDAY" and if I have "MONDAY" selected prev() should give me "SUNDAY". Write unit tests for
prev/next/randomize functions (think about what the program is changing
and how to check it). 
Specifically write tests to show -
* 1 day from a SUNDAY will be a MONDAY
* 2 days before a TUESDAY will be a SUNDAY
* 40 days from a FRIDAY will be a WEDNESDAY
* 87 day before a WEDNESDAY will be a SUNDAY

Write the following formulas in Latex (optional integrate the integral ignoring the y = 0 and y = 5 limits and write the formula for it 
using c for the constant) 

![Formulas](Photos/equations.png)

Write a regex expression to check if a string contains only AlphaNumerical (A-Z, a-z, 0-9) characters

How would you resolve the following merge conflict (pick whichever one you feel is correct)-

<blockquote>
	<p> 
		<<<<<<< HEAD
		<br />
		To whom'st'd've'ed it may concern, 
		<br />
		=======
		<br />
		To whom it may concern, 
		<br />
		>>>>>>> da18a796d6f3715b9bb0c58b8ef63a96aebf8511
		<br />
		 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hello from the other side I must have called a thousand times
	</p>
 </blockquote>
 What git commands would you run after resolving this conflict (Let's assume this file is called
 Adele.md)?

Solutions are [here](testing_solution.cpp) - Look at comments at the bottom of the file.
