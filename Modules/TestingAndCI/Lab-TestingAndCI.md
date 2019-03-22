# Lab 8: Testing and Continuous Integration (3/22/2019)

Testing is the life blood of any large project and a comprehensive 
suite of unit and regression tests can greatly improve the lives of both developers and users. For developers:

1. It allows them to have high confidence that any changes they introduce into the system does not adversly impact other code -- particularly code that may not be frequently executed -- in an unexpected way
2. It gives developers an established way to track down and correct systemic errors
3. It provides an easy way to verify correctness when porting to new computer architectures
4. It provides a baseline target when refactoring the code.

For users:

1. It provides a high confidence that the given code works and has been installed correctly on the user's system
2. It provides examples for how the code can be used correctly 

This final point is further improved when integration tests or examples are included in the testing environment.

For this lab, we will revisit the material from our section on build systems. We will use some of the same tools to execute and verify unit tests on an established project, *VTK*, demonstrate how to add a _(non-working)_ test to the system, and then how to iterate on the test until we have it working correctly.

*If it ain't tested, it's broken -- Bill Lorensen and the VCV Board, GE Global Research*

Record all of your observations and a reasonably comprehensive set of screen shots in your lab report for *lab8*.

## Checkpoint 1: Getting Started
1. You should already have *cMake* installed from our unit on build systems. If not, please visit [https://cmake.org/download/](https://cmake.org/download/) to download and install it for your operating system.
2. Now visit the VTK download page on GitLab [https://gitlab.kitware.com/vtk/vtk](https://gitlab.kitware.com/vtk/vtk) and clone VTK.
3. Create a build directory and use *cmake-gui* to bring up the configuration options for cmake. Point the source and build directories appropriately for where you installed VTK and the build directory you create. Hit _configure_ to allow cmake to set up the build files for your system. Choose to build _unix makefiles_ as the generator if you are on Linux or OSX. Choose the appropriate version of VS if you are on Windows.
4. We could configure and build VTK using the default options, but VTK is a big project and it would take an hour or more to build it completely. Instead, we will turn off some options and get a system we can build in around 10 minutes. You may need to hit configure after turning off the VTK flags to get all of the Module options. Also, be sure that the _Grouped_ and _Advanced_ options are checked in the interface.
	- Turn **off (NO)**:
		- VTK\_GROUP\_ENABLE\_Rendering
		- VTK\_GROUP\_ENABLE\_StandAlone
	- Turn **on (YES)**:
		- VTK\_MODULE\_ENABLE\_VTK\_CommonMath
		- VTK\_MODULE\_ENABLE\_VTK\_CommonMisc
		- VTK\_MODULE\_ENABLE\_VTK\_CommonSystem
		- VTK\_MODULE\_ENABLE\_VTK\_CommonTransforms
5. All other options should remain as they are originally.
5. Hit *configure* and then *generate* to complete generating the build system
6. At this point, VTK is ready to test. We could execute the tests from this point, but just as a sanity check, build the system normally and verify everything works correctly. For OSX or Linux, this just means go into the build directory and execute make (*make -j4* will run on up to 4 separate threads to speed up build times). For Windows, open the project and build with the VS IDE.

## Checkpoint 2: Executing the Tests
1. While the system is building, visit the VTK dashboard at [https://open.cdash.org/index.php?project=VTK](https://open.cdash.org/index.php?project=VTK). Explore the project. 
	- Find the *Nightly* and *Experimental* sections and look at some of the submissions. How can you see what tests where run for a particular submission? 
	- Find a submission with errors. Can you see what the error condition was? How does this help you debug the failure?
	- Find a system that is close to your specific configuration in the *Nightly* sectino. How _clean_ is the dashboard? Are there any errors that you need to be concerned with?
2. Once the system is done building, it is time to verify the installation. We will be doing an *Experimental* build to differentiate ourselves from *validated* systems. In the Build directory, execute the command _ctest -D Experimental_. Experimental builds start from your current project state, execute a configure command to pull in any changes you may have made to the CMake Files, build the system to pull in any code changes and then execute a suite of tests and report back to the dashboard. Since we just did a build, the configure and build phases should be trivial. Most of the time will actually be spent running *VTK tests.
3. Go back to the dashboard and find your submission. Are there any errors? If so, are they consistent with other projects using your architecture? If not, fix any sugnificant errors in your system and resubmit to the dashboard until your system performs similarly to equivalent architectures.
 
## Checkpoint 3: Adding a Test
1. Take a look at the file [TestNewArrayInterpolationDense.cxx](TestNewArrayInterpolationDense.cxx). We will add this to the testing for the _common core_ module in VTK. It is a little bit of a cheat because it is a slight variation of a test (_TestArrayInterpolationDense.cxx_) that already exists in the system, but really, it is not much of a cheat. Generally, when you add a test to an existing system, it is because you found a hole in the testing. Starting from an existing test that *comes close* is a good beginning.
2. Add the file to the appropriate directory in the VTK source and enable it in the build. You will need to find the right place and you will need to modify the *CMakeList.txt* file in the testing directory. Use the clues above (particularly that the new test is derived from _TestArrayInterpolationDense.cxx_) to figure out the changes that need to be made.
3. Re-execute the Experimental test suite and find your new submission on the Dashboard. Explore and make sure that you can identify the error. What information does the Dashboard provide?

## Checkpoint 4: Fixing the Test
1. Figure out what's wrong with the test and fix it. Now resubmit the Experimental tests and visit the Dashboard. Look at the differences between successful and unsuccessful tests. Note the increase in the number of tests executed.
	- You may need to try more than once to get a successful fix
	- You don't need to execute the Experimental Build every time you want to test your solution. Instead you can execute the test directly.
	-  To find out the proper command to exercise the test outside of the Experimental build, try: *ctest -N -VV -R TestNewArrayInterpolationDense*. In this command, the *-N* flag says not to actually run the test, the *-VV* flag says to give a verbose output, and the *-R* flag gives the name of the test to simulate.
	-  *[Optional]* This is a pretty simple change and a pretty simple error. You should be able to quickly figure out the error by comparing the new file to the original and by maybe putting in a few print statements to find where the error is occurring. However, cMake does allow you to run the code with debug enabled so that you can use your favorite debugger. As an optional step, figure out how to turn on Debug in the VTK build and use a debugger to find the error above.

***When you are finished, push your Lab 8 report to your Lab Notebook repository and post a text file with a link to the Lab 8 report on Submitty.***

## Checkpoint 5: Project Updates
Please complete the steps in the following file - [../../Resources/ProjectWeek1.md](../../Resources/ProjectWeek1.md)



