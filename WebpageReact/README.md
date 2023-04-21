# CSCI-4470 Website

This folder contains files for the course website. The website is built using React and was scaffolded using vite.js. As of Spring 2023 (when the website was first created), this website is incomplete, and there are a few issues that need to be addressed before the site can fully go live.

This short guide is intended to outline how the site is organized, for anyone who plans on working on it in the future and who potentially doesn't have a lot of experience with react (like we did, when we initially wrote all this code)

File Structure & Organization
----------
The website contains pages for important Open Source Software course information, like the course syllabus, modules, resources, and assignments, as well as an interactive navbar and footer.

This website was built using React, and the files are organized to try and follow React conventions.
The source code for the website is inside the src folder, which is divided into folders based on file type:

* JSON files, which contain data for course modules, resources, TAs, etc. that are mapped onto some pages
* Assets (mostly just images)
* React components 
* Routes, which are the pages themselves
* Styles for some of the pages/components

Some of the main files that serve as the base for the site aren't in any specific folder and are just in src.

Running The Site Locally
----------
Our project uses vite.js as a tool to run the website on a local server, similar to Visual Studio's Live Server extension for regular html pages.
Running the site on your end is very easy. Here's what you need to do:
* Install ubuntu on your laptop 
* Clone the Open Source Software github repository
* Install node/npm if you don't already have it
* Switch to the latest version of node.js using nvm 
* Navigate to the WebpageReact folder of the repository
* Type "npm install" and wait for npm to all the packages we have in package.json
* Type "npm run dev"
* Open the site using the localhost link on your terminal screen and view the site!

Issues With the Website
----------
As of writing this guide in April 2023, the website has a few issues. These issues may be fixed in the future, so this guide may be outdated. For an accurate list of the current issues, check the Github issues page.
Current issues:
* No scroll bars on any of the webpages for some reason
* Modules/resources/assignments page collapsible list buttons are a little wider than the content divs
* We want to try and find a way to display the Syllabus.md file directly onto the syllabus page, but we tried a few react packages for displaying md files and none of them worked. Right now the syllabus page just has a bunch of html converted from the syllabus md file

Future Plans/Things To Work On
----------
If you want something to work on for the website, you can:
* Try to address/fix some of the issues with the site
* Try to find a way to display the syllabus.md file directly onto the syllabus page
* Find a way to use Github actions to compile and convert some of the modules' .rst files to pdf using the python Sphinx api (ask Professor Turner)