# Study Guide for Quizzes

## Quiz 1 - Friday 2/24/17

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

Make sure all of your lab code is on your local computer as you are allowed to refer to it during the quiz and may
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

## Sample Questions - 

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

## Quiz 2 - Friday 4/14/2017

Quiz two will cover everything that we have covered between quiz 1 and now. You should know all material 
from Lab 6 to Lab 10 and all the lectures covered (See [Spring2017Schedule.md](Spring2017Schedule.md) for more info).

For this quiz I would recommend having the following software installed beforehand.

[MongoDB](https://docs.mongodb.com/manual/installation/)

[R](https://cran.r-project.org/bin/windows/base/)/[RStudio](https://www.rstudio.com/products/rstudio/download/)

Additionally since this quiz is open notes (but closed internet), I would recommend bringing whatever notes you have
taken to the quiz as well as cloning the class repository(git clone https://github.com/rcos/CSCI2963-01-Spring2017.git).
You can then access all the lecture notes from the HTML Lectures folder. You can go to the HTML Lectures/index.html
and open all of the lecture notes from there.

Make sure all of your lab code is on your local computer as you are allowed to refer to it during the quiz and may
find it helpful to do so.

Topics that I would review for the quiz are:

* Definition of Open Hardware
	* What are some devices that are Open Hardware and some that are not?

* What is Scientific Computing?

* What is Statistical Computing?

* How can you find more information about a Github project you have downloaded?
	* What are some meaningful statistics you can use to analyze a project?

* Given a dataset in CSV format, how would you go about extracting useful information from it?
	* What are some ways to graph this data?

* How could you simulate games of chance (think dice rolls, flipping a coin) and graph meaningful results?

* Know how arduino code works and how you can implement functions to interact with it

* You should know the basics of how graphs works

* Know basics of probability (See Part B b of the sample quiz), permutatoins and combinations (related to scientific computing).

* Know how commands work in MongoDB
	* How would you look up, update and insert into an existing database?
	* What are some advantages and disadvantages to using MongoDB over traditional relational databases?

* What are some key aspects of community in Open Source Projects? How can projects be sustainable?

* Review :
	* [Scientific Computing Lecture](HTML Lectures/Sci-Computing-master/index.html)
	* [Statistical Computing Lecture](HTML Lectures/Stat-Computing-master/index.html)
	* [Open Hardware](Lectures/OpenSourceHardware.pdf)
	* [Mongo DB](Lectures/MongoDB.pdf)

## Sample Questions - 

Given an unfair coin that has a 40% chance of landing on heads and 60% chance of landing on tails,
what is the chance of landing 3 heads in a row?

Simulate flipping this coin 100 and 1000 times and plot the relative histogram and relative frequency of heads and tails.

If you have a fair coin and have gotten 100 heads in a row, what is the probability the next flip will be a heads?

Given a 12 sided dice (numbers 1-12) with the following odds -

1 - 5%

2 - 3%

3 - 7%

4 - 12%

5 - 18%

6 - 21%

7 - 8%

8 - 6%

9 - 3%

10 - 11%

11 - 1%

12 - 5%

Simulate rolling this dice 100 and 1000 times and plot the relative histogram and relative frequency of (1-12).

Given two normal six sided dice (with numbers 1-6), what number are you most likely to roll?
Plot the the relative histogram and relative frequency of each result (2-12).

How many ways are there to seat 4 people at a 4 person table?

What is the probability of picking 3 cards and getting 3 spades in a row from a standard 52 card deck without replacing cards? What is the probality
of getting 3 spades out of 3 cards picked with replacing cards after you pick them?

What is an algorithm to find the shortest path between two nodes in a graph?

Using the Database from Lab 9, generate a random 4 letter word consisting of only lowercase alphabetical characters 
and generate a random 4 letter defintion consisting of only lowercase alphabetical characters and insert it to the database.

Redefine each word with length four to have the definition "Four"

Redefine each word starting with the letter R to have the definition "Redacted"

Add a new field to the word "Beer" containing a list of the following beers - ["Stella Artois", "Heineken", "Coors Light"]

Insert the following word/definition into the database - word: "If True" definition "Big"

If you would like more MongoDB practice this tutorial is very helpful - 

[Online MongoDB practice exercise](http://www.w3resource.com/mongodb-exercises/)

How could you make an arduino blink 3 times in a row at random time intervals? How you could make it blink every 10 seconds?