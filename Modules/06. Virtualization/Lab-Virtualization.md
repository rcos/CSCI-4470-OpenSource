# Lab 6 Virtualization and Docker - 7/12/2019

## Before you start ...

I **strongly** recommend doing this lab from your linux machine, USB boot or your Mac under OSX. Running from Windows is possible, but there are implications with other virtualization products such as ***Virtual Box*** if you do. Please see [https://docs.docker.com/docker-for-windows/install/](https://docs.docker.com/docker-for-windows/install/) for more information and note the two possibilities that are given to you on that page: **Docker Community Edition (CS)**, and **Docker Desktop**. Then make sure to run the Docker Quickstart Tutorial to veridy the system is installed and working.

***Make sure that there are no VirtualBox images running whenn you do the install!***

## Learning Objectives:

After completing this lab you will be familiar with the practical aspects of using and configuing light weight environments using the Open Source Docker tool.

Specifically you will:

1. Install *Docker* and use it to explore some publically available containers
2. Use *Docker* to configure and generate a working container
3. Use the *YAML* scripting language to generate multiple *Docker* containers that work together to implement a set of related services.

## Lab

_For this lab we will use the excellent material on Docker prepared by RCOS alumni Severin Ibarluzea, Ada Young, and Joseph Lee._

The lab parallels a lot of the material we worked through at the end of the [Virtualization and Containers](https://github.com/rcos/CSCI-49XX-OpenSource/blob/master/Modules/Virtualization/source/index.rst) lecture, except that it does not require you to push your containers to a Docker repository.

Please clone the github repository [rcos/docker-examples](https://github.com/rcos/docker-examples) and ***CHECKOUT the Spring2019 Branch***. The ***master*** branch has an issue with ***example04*** and will not work, Then go through examples 0-4. Document your steps and observations in your lab notebook for Lab 6 and upload a link to the lab to Submitty.

Note that the Dockerfile for examples 3 is given to you. I recommend that you go through and regenerate it line by line for practice. You will need to create files for example04 on your own, although the code is embedded in the lab.

