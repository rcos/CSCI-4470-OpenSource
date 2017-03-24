## Lab 7 (3/10/2017) on Statistical Computing/Open Data/Data Science/Data Exploration/Data Mining

Data Science, Statistical Modeling and Machine learning are important, current topics in Computer Science. There has been a lot of open source software and open data available.

[This site](http://www.analyticsvidhya.com/blog/2014/11/data-science-projects-learn/) recommends five projects to try in order to learn data science. Another place to look at is [Kaggle](https://kaggle.com). Kaggle holds competitions on machine learning/data science. A couple of years ago, Diogo, a student in RCOS, won first place in the [cause-effect pairs competition](https://www.kaggle.com/c/cause-effect-pairs/forums/t/5702/code-of-top-ranking-participants/30618) and [his code can be found here](http://rcos.rpi.edu/projects/protoml/). If you are interested in data science you can participate (and maybe even win!).

Here is a smple program with apriori rules https://github.com/rcos/CSCI2963-01/blob/master/Labs/lab8-titanic-example-2015.R using titanic disaster data.

Now back to the Graduate Admissions data:

Graduate Admssions dataset is [available in R](http://www.ats.ucla.edu/stat/data/binary.csv) If you issue a R Command str(admissions) tells you what the columns of this data set contain (namely admit (0 or 1), GRE score, GPA and Rank). There are 400 data points. First you have to convert the numerical entries into class variables) - These two command of R will do that

In R Studio select import dataset, import as CSV then rename the dataset from binary to admissions.

col_names <- names(admissions)

admissions[,col_names] <- lapply(admissions[,col_names] , factor)

For this lab, please do the following - Lab report should be in your github page

1. Read Chapter 9 of the book on [Association Rule Mining](https://cran.r-project.org/doc/contrib/Zhao_R_and_data_mining.pdf)
(You can also read [these slides](http://www.slideshare.net/rdatamining/association-rule-mining-with-r ))

2. Read about the [background on Association Rule mining](https://en.wikipedia.org/wiki/Association_rule_learning)

    *hint In RStudio, go to Tools -> Install Packages, then type arules into the "Packages" box, hit ok and do the same thing with arulesViz*

3. Implement association rules for Graduate Admissions Data set (experiment with different parameters. Look in chapter 9 of the book on page 89 for support and confidence )

4. Try different visulaizations as done in chapter 9 of the text book. (Things have changed with R too - To load RGraphviz  go to a new Rscript window and type  `source("http://bioconductor.org/biocLite.R")`   Next, type in `biocLite("Rgraphviz")` After this you will be able to plot the graph of rules.)

5. Please explore the two data set elect (election Bush vs. Kerry in 2004) and topmovies (top 1000 movies) 
[These two data sets are located in https://github.com/mskmoorthy/datalab7 - These
are public domain data - I modified one of them to get into easier format]- 
similar to how the data is explored in http://www.rdatamining.com/docs/data-exploration-and-visualization-with-r
Pease try to repeat what has been done with iris data. You may also want to find which states Bush won and the number of states he won.
For topmovies, find how many of the movies are sequels, how many movies have the name "man"  and how many star wars movies are
in them. Find as many interesting things about both the data as possible.

Import both of these files as CSV.

5. (optional) Read the kaggle [R tutorial on Machine Learning](https://www.datacamp.com/courses/kaggle-tutorial-on-machine-learing-the-sinking-of-the-titanic) (Random forest is also discussed in chapter 4 of the Zhao's book)
(you can login with your facebook or google plus account or register)

6.  Create an Obervatory page and a repo page for your project. Create a slack channel. Please choose a license for your repo.
Write a paragraph description of the status of your project - What did you do last week on your project? You only have 5 or 6 more weeks to finish your project.
