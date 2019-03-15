## Lab 7 (3/15/2019) on Statistical Computing/Open Data/Data Science/Data Exploration/Data Mining

Data Science, Statistical Modeling, and Machine Learning are important, current topics in Computer Science. There is a lot of open source software and open data available that are helping 

The best way to learn data science is to do data science. In this lab we will give you some level of practice, but to learn it well, you will need to do more. [This site](http://www.analyticsvidhya.com/blog/2014/11/data-science-projects-learn/) recommends five projects to try in order to learn data science. Another place to look at is [Kaggle](https://kaggle.com). Kaggle holds competitions on machine learning/data science. A couple of years ago, Diogo, a student in RCOS, won first place in the [cause-effect pairs competition](https://www.kaggle.com/c/cause-effect-pairs/forums/t/5702/code-of-top-ranking-participants/30618) and [his code can be found here](https://github.com/ProtoML/ProtoML). If you are interested in data science you can participate (and maybe even win!).

<!--Now let's look at Graduate Admissions data:

A Graduate Admssions dataset is [available in R](http://www.ats.ucla.edu/stat/data/binary.csv) If you issue a R Command str(admissions) tells you what the columns of this data set contain (namely admit (0 or 1), GRE score, GPA and Rank). There are 400 data points. First you have to convert the numerical entries into class variables) - These two command of R will do that

In R Studio select import dataset, import as CSV then rename the dataset from binary to admissions.

col_names <- names(admissions)

admissions[,col_names] <- lapply(admissions[,col_names] , factor)-->

For this lab, please do the following - your Lab report should be in your github page

1. Read Chapters 3 and 5 of [https://cran.r-project.org/doc/contrib/Zhao_R_and_data_mining.pdf](https://cran.r-project.org/doc/contrib/Zhao_R_and_data_mining.pdf) on plotting and regression. The chapters  work through some simple plotting and regression using datasets built into R. You may have problems with the **rgl** library if you are on a Mac. Feel free to ignore that specific plot, or, if you'd like, download XQuartz from [http://xquartz.org](http://xquartz.org). **You do not need to show anything from step 1 in your lab report.** This is just a learning step.
    
2. Now go to DataCamp [https://www.datacamp.com/home](https://www.datacamp.com/home) and create an account. I am in the process of getting a class account for Open Source Software that will allow you to do more with R, but for now we will leverage the free lessons that DataCamp provides.
3. Do the introductory lesson of "Data Visualization with ggplot2 (Part  1)". Take screen shots along and put them in your Lab Notebook for Lab 7.
4. Now do the Parallel Slopes lesson of "Multiple and Logistic Regression". Again, take screen shots along the way and put them in your Lab Notebook.
6.  Create an Observatory [http://rcos.io](http://rcos.io) page and a repo page for your project. Create a slack channel. Please choose a license for your repo. (If you are joining an existing project that has a communication channel, your group can just join that. Be sure to tell me this, and to tellme how to find it.)
Write your first blog as a paragraph description of the status of your project - What did you do last week on your project? You only have 5 or 6 more weeks to finish. Add a pointer ***in your lab notebook*** to your page on Observatory and make sure we can get to the project page, the repo page and the blog page from it.
5. Submit a ***text file*** with a link to your Lab 7 notebook on github. Make sure your lab notebook has been pushed to github. Your notebook should have:
     * Screen shots from the Data Visualization with ggplot2 (Part  1) introduction on DataCamp
     * Screen shots from the Multiple and Logistic Regression intrduction on DataCamp
     * A pointer to your open source project on Observatory
5. (optional) Read the kaggle [R tutorial on Machine Learning](https://www.datacamp.com/courses/kaggle-tutorial-on-machine-learing-the-sinking-of-the-titanic) (Random forest is also discussed in chapter 4 of Zhao's book above.)
(You can login to Kaggle with your facebook or google plus account or register for a new account.)

