## Week 5 Lab  Number 5 - Build Systems
### Learning Objectives
1. Learn about different build systems 
2. Gain familiarity with shared and static libraries and how to build them
3. Get practice creating projects using `make` and `cmake`

### Steps
- Download CMake from this website [https://cmake.org/download/](https://cmake.org/download/) if needed (you can also install it using `sudo apt install cmake` on your Ubuntu or Linux system).
- You can see the last example in the lecture slide [here](https://github.com/rcos/CSCI-4470-OpenSource/tree/master/Modules/05.BuildSystems/Ex-sp17). If you have the OSS repository cloned do: `cd Modules\05.BuildSystems\Ex-sp17; mkdir build; cd build`, then execute `cmake ../source/` followed by `make`) **Note:** The repository version uses the Mac OSX version from the lecture. You will need to change it slightly for Linux.
- Follow Steps 1-5 of the CMake tutorial. The tutorial can be found online at [https://cmake.org/cmake/help/latest/guide/tutorial/index.html](https://cmake.org/cmake/help/latest/guide/tutorial/index.html). I recommend, however, that you instead, clone the CMake repository from GitLab using `git clone https://gitlab.kitware.com/cmake/cmake.git`. If you do, you can get to all of the code used in the tutorial by going to the tutorial directory: `cd cmake/Help/guide/tutorial/`. The steps can be found in the `index.rst` file or you can get a more readable version by following the web link.
    - Please read and understand the Tutorial. If you use the tutorial directory from CMake as noted above, you will not need to type in a lot of text.
    - The tutorial may not be perfect and you may find a few errors. See if you can work them out, but don't stay stuck for too long. Discuss the issues with your classmates and then with the mentors, TA, and instructor if you find yourself unable to make progress after a few minutes.
    - If you get ***really*** stuck, remember that the next step starts from where the current step ends. Looking ahead can help you to resolve some minor issues.
    - In your lab report: 
        - For Steps 1 and 2, include the modified code, `tutorial.cxx`, the `CMakeLists.txt` along with a screen shot of running the `Tutorial` code without input, with 10 and with 4294967296.
        - For Step 3, include `CMakeLists.txt` and `MathFunctions/CMakeLists.txt` (most of your changes for `Step3` will be in `MathFunctions/CMakeLists.txt`) along with a screen shot of running the `Tutorial` code without input, with 10 and with 4294967296
        - For Step 4, include `CMakeLists.txt` and `MathFunctions/CMakeLists.txt` along with the output of running `ctest -VV`.
        - For Step 5, include `CMakeLists.txt` and `MathFunctions/CMakeLists.txt` along with a screen shot of running the `Tutorial` for the USE_MYMATH case code without input, with 10 and with 4294967296.
- When you are finished, get a copy of the code at [https://github.com/rcos/CSCI-4470-OpenSource/tree/master/Modules/05.BuildSystems/Lab-BuildSystemsExample](https://github.com/rcos/CSCI-4470-OpenSource/tree/master/Modules/05.BuildSystems/Lab-BuildSystemsExample). If you have the code checked out, do a fresh pull to make sure you get any recent changes that may have been made to the repository.
    - Write a Makefile for the code in that directory. Your solutions should:
        - Create a static library from the code in the `source` directory.
        - Create a shared library from the code in the `source` directory.        
        - Use the file `program.c` and the libraries you created to make two programs, one linked to the shared library and one linked to the static library. Give them different names. I recommend `dynamic_block` and `static_block`
        - There are a lot of shortcuts you can use when generating Makefiles. Generally, I approve of using shortcuts so long as the code/Makefile/whatever is understandable. For this exercise, explicitly doing the compiles, links, etc., individually ***is required*** both to show us that you understand the material and to practice for the upcoming quiz.
   - When you are done, do the same thing using CMake by creating a `CMakeLists.txt` file.
   - Compare the sizes of the shared and static versions of your program using `ls -la`.
   - In your lab report, paste in your Makefile, your CMakeLists.txt file, the Makefile created by cmake, the relative size of your two executables, and the results of running your program. 

- Submit your lab report to Submitty.

