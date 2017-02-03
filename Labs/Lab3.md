## This lab (Lab # 3 on 2/3/2017) is about Git (local repository), Github and a few of the simple commands.

## Since most of you have had practice of doing these problems in class, there will be a lecture on Documentation and Community for the first 40 minutes. After that you can do the lab.

## Your Lab report will be Lab3.Md

Commands used will include `git add`, `git commit`, `git pull`, `git checkout`, `git branch`, `git push`, `git log`, `git status`, `git diff` , `git tag`,  `git rebase` and `git merge`

- Use the command line (or git shell) for this lab
> Command line is preferred - your ubuntu usb should help

Useful pages:
- A cheat sheet for [git commands] (https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)
- A very nice [book about git](https://git-scm.com/book/en/v2)
- A cheat sheet for [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) and [another one](http://scottboms.com/downloads/documentation/markdown_cheatsheet.pdf)


## Part 1

> Generate ssh keys if you have not done so.

  > [Follow these instructions for generating and adding ssh keys to Github](https://help.github.com/articles/generating-ssh-keys/)
    (make sure you select the correct operating system at the top)

1. Setup git
  * Follow the instructions from slides 7 - 27 of https://github.com/rcos/Git-Introduction-Part-I by cloning the repository and opening index.html.
    * Create a local repository `lab3part1` using the command line
  * Create a README.md file.
    * This file should include, as a bullet-ed list:
      * your name
      * your photograph (Add it to your repository and use markdown to display it)
      * your graduating year
      * your project sub-area (the type of project that you are working on)

2. [Create a new repository on github](https://github.com/new) and push the README.md file you created.
  >*(hint: you should be doing something like this):* Follow the helpful post by adeet (UTA) in the class slack channel #csci2963-01spring2017 )
```
git init
git add README.md
git commit
git remote add origin <repo url>
git push origin master
```

  ***Provide a link to this repository in your Lab3.Md .***

3. Create a file `first.py` that prints "Hello World!".
  * Add, commit, and push the file to your github repository on the master branch with `git push origin master`.

4. Create a new branch called `mars` with `git branch mars`.
  * Check out the mars branch by doing `git checkout mars`.
  * Change `first.py` to print "Hello Mars!".
  * Add, commit, and push this file to the mars branch using `git push origin mars`.

5. Repeat with a branch called `jupiter`.

6. Install gitk with `sudo apt-get install gitk`.
  * Visualize the branching diagram.
  * Use `gitk` and `gitk --all`
  * Compare it with this command `git log --graph --oneline --decorate`.
  *   **Include a screenshot in your lab report.**


## Part 2

1. You can create a derivative of a repository by forking.
  * Read about forking [here](https://guides.github.com/activities/forking/index.html)
  * Fork the https://github.com/octocat/Spoon-Knife repository by pressing the Fork button in the top right corner of the repository page.

2. Clone the fork you made using `git clone <fork url>`

3. Add a file `myprojectprogress.md`
  * Write about your progress with your project selection
  * Push it back to your forked Github repository.

4. Do the first four levels (Introduction Sequence) of [Learn Git Branching](http://pcottle.github.io/learnGitBranching/).
  * Include a screenshot in your lab report.

## Part 3

1. Fork the repository https://github.com/mskmoorthy/Spring2017PullReq
  * Make a file named &lt;firstName lastName>.Md, add today's date on the first line (2/3/2017), and make a pull request.
  * Ask a TA to merge your pull request.
  * You can update your repository to reflect changes in the upstream repository using `git remote add upstream https://github.com/mskmoorthy/Spring2017PullReq.git` and `git pull upstream`

2. Make sure you understand the command `git diff` from [this example](https://www.safaribooksonline.com/library/view/version-control-with/9780596158187/ch08s02.html)
  * Examine the content of the diff file from the previous question (your pull request)

3. Understand git tagging from [this example](https://git-scm.com/book/en/v2/Git-Basics-Tagging) and [this one](http://rogerdudler.github.io/git-guide/)

4. Create a Github repository called `courseproject`.
  * Create a file `References.md`
  * Add any projects or websites that have interested you so far
  *  **Please add a link to the repository in your Lab 3 report**

5. As a table: (one person per table)
  * Fork the repository https://github.com/mskmoorthy/Story-Spring2017
  * Create one branch for your table (Table1, Table2,....)
  * you can push the branch the branch by doing  `git checkout -b feature_branch_name` , edit files, `git add` and `git commit` and  `git push -u origin feature_branch_name`
  * Add each member of the table to the repository:
    * Click 'Settings' on the repository page
    * Click 'Collaborators'
    * Add the username of each person
    *   **Please add a link to the repository in your Lab 3 report**


6. Each member should clone the table's repository and checkout your table's branch
  * Locally, each member should create a file called `table_<number>.Md`
    * Write your project ideas inside.
  * Push to your branch and fix any merge conflicts.
  * Then each table merges with the master branch and submits a pull request to the upstream repository.
  * Resolve any merge conflicts that occur along the way.
    * You can update your repository to reflect changes in the upstream repository using `git remote add upstream https://github.com/mskmoorthy/Story-Spring2017.git` and `git pull upstream`

  * [Git Introduction  Part II](https://github.com/rcos/Git-Introduction-Part-II) might be usefull for this (open index.html in the same way as the Introduction Part I slides)
