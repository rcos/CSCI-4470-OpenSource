# Lab - Virtualization and Docker

## Before you start ...

Make sure you can run Docker using the instructions called out in the course notes. Specifically check out:
[https://docs.docker.com/get-started/](https://docs.docker.com/get-started/) and for those of you running on WSL [https://docs.microsoft.com/en-us/windows/wsl/install-win10](https://docs.microsoft.com/en-us/windows/wsl/install-win10) and [https://docs.docker.com/docker-for-windows/wsl/] (https://docs.docker.com/docker-for-windows/wsl/)


***Make sure that there are no VirtualBox images running when you do the install!***

## Learning Objectives:

After completing this lab you will be familiar with the practical aspects of using and configuing light weight environments using the Open Source Docker tool.

Specifically you will:

1. Install *Docker* and use it to explore some publically available containers
2. Use *Docker* to configure and generate a working container
3. Use the *YAML* scripting language to generate multiple *Docker* containers that work together to implement a set of related services.

## Lab

_For this lab we will use the excellent material on Docker prepared by RCOS alumni Severin Ibarluzea, Ada Young, and Joseph Lee._

The lab parallels a lot of the material we worked through at the end of the [Virtualization and Containers](https://github.com/rcos/CSCI-4470-OpenSource/blob/master/Modules/09.Virtualization/source/index.rst) lecture, except that it does not require you to push your containers to a Docker repository.


Please clone the github repository [rcos/docker-examples](https://github.com/rcos/docker-examples) and ***CHECKOUT the Spring2019 Branch***. The ***master*** branch has an issue with ***example04*** and will not work, Then go through examples 0-4. Document your steps and observations in your lab report for this lab and upload a link to the your lab repository on Submitty when you are done.

Note that the Dockerfile for examples 3 is given to you. I recommend that you go through and regenerate it line by line for practice. You will need to create files for example04 on your own, although the code is embedded in the lab.

