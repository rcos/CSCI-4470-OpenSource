## Week 5 Lab  Number 5,  2/12/2019 Tuesday - Build Systems
### Learning Objectives
1. Learn about different build systems 
2. Gain familiarity with shared and static libraries and hown to build them
3. Get practice creating projects using `make` and `cmake`

### Steps
- Download CMake from this website [https://cmake.org/download/](https://cmake.org/download/)
- You can see the last example in the lecture slide [here](https://github.com/rcos/CSCI-4961-01-Summer-2018/tree/master/Modules/BuildSystems/Ex-sp17) (first go to the `build` directory and execute `cmake ../source/` followed by `make`)
- Follow steps 1-3 of the CMake tutorial: [http://www.cmake.org/cmake-tutorial/](http://www.cmake.org/cmake-tutorial/)
    - Note that the tutorial code can be found in the CMake Repository on GitLabs. You do not need to type in all of the steps. Just clone the repository using `git clone https://gitlab.kitware.com/cmake/cmake.git` and `cd cmake/Tests/Tutorial/` to get to the steps. The material in the tutorial corresponds to directories Step1 through Step5.
    - Please read and understand the Tutorial
    - In your lab report (Lab5.md) put the code and the results for each of the five steps of the tutorial.
- When you are finished, get a copy of the code at [https://github.com/rcos/CSCI-4961-01-Summer-2018/tree/master/Modules/BuildSystems/Lab-Example](https://github.com/rcos/CSCI-4961-01-Summer-2018/tree/master/Modules/BuildSystems/Lab-Example) 
    - Write a Makefile for the code in that directory. Your solutions should:
        - create a static library from the code in the `source` directory.
        - create a shared library from the code in the `source` directory.        
        - use the file `program.c` and the libraries you created to make two programs, one linked to the shared library and one linked to the static library. Give them different names. I recommend `dynamic_block` and `static_block`
   - When you are done, do the same thing using CMake by creating a`CMakeLists.txt` file.
   - Compare the sizes of the shared and static versions of your program using `ls -la`.
   - In your lab report, paste in your Makefile, your CMakefile, the Makefile created by cmake, the relative size of your two executables, and the results of running your program. 

- Submit a ''.txt'' file with a link to your Lab5.md file on github by 11:59:59 on 2/12/2019 for full credit.

