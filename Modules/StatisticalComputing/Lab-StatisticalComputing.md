## Lab 7 (7/19/2018) on Statistical Computing/Open Data/Data Science/Data Exploration/Data Mining

Data Science, Statistical Modeling, and Machine Learning are important, current topics in Computer Science. There is a lot of open source software and open data available that are helping 

The best way to learn data science is to do data science. In this lab we will give you some level of practice, but to learn it well, you will need to do more. [This site](http://www.analyticsvidhya.com/blog/2014/11/data-science-projects-learn/) recommends five projects to try in order to learn data science. Another place to look at is [Kaggle](https://kaggle.com). Kaggle holds competitions on machine learning/data science. A couple of years ago, Diogo, a student in RCOS, won first place in the [cause-effect pairs competition](https://www.kaggle.com/c/cause-effect-pairs/forums/t/5702/code-of-top-ranking-participants/30618) and [his code can be found here](https://github.com/ProtoML/ProtoML). If you are interested in data science you can participate (and maybe even win!).

<!--Now let's look at Graduate Admissions data:

A Graduate Admssions dataset is [available in R](http://www.ats.ucla.edu/stat/data/binary.csv) If you issue a R Command str(admissions) tells you what the columns of this data set contain (namely admit (0 or 1), GRE score, GPA and Rank). There are 400 data points. First you have to convert the numerical entries into class variables) - These two command of R will do that

In R Studio select import dataset, import as CSV then rename the dataset from binary to admissions.

col_names <- names(admissions)

admissions[,col_names] <- lapply(admissions[,col_names] , factor)-->

For this lab, please do the following - your Lab report should be in your github page

1. Read Chapter 9 of the book on [Association Rule Mining](https://cran.r-project.org/doc/contrib/Zhao_R_and_data_mining.pdf)
(You can also read [these slides](http://www.slideshare.net/rdatamining/association-rule-mining-with-r )). The example uses the Titanic dataset that comes as part of R to develop some rules for estimating if a given person survived or not. Work through the example, keeping in mind that it was written to a previous version of R. Most of the sample commands work, but if you follow it exactly you will find some errors. Pay particular attention to calling the *apriori* function. You need to provide it with a data frame and not a dataset. Also, when you overwrite the lower triangular part of the subset matrix, you need to use *FALSE* instead of *NA*. Most (but not all) of the example is contained in a sample program at [https://github.com/rcos/CSCI-4961-01-Summer-2018/blob/master/Labs/lab8-titanic-example-2015.R](https://github.com/rcos/CSCI-4961-01-Summer-2018/blob/master/Labs/lab8-titanic-example-2015.R). Look at it when you run into issues, but this is your chance to learn a little about R. Make sure you understand what is happening and that you can replicate the analysis. 
<!--subset.matrix[lower.tri(subset.matrix, diag=T)] <- FALSE-->

    *Hint: to get the apriori code and the associated In RStudio, go to Tools -> Install Packages, then type arules into the "Packages" box, hit ok and do the same thing with arulesViz*
    
2. Read about the [background on Association Rule mining](https://en.wikipedia.org/wiki/Association_rule_learning)

   <!--3. Implement association rules for Graduate Admissions Data set (experiment with different parameters. Look in chapter 9 of the book on page 89 for support and confidence )-->

3. Try different visualizations as in Chapter 9 of the text book. The book uses all of the rules. If you use just the rules with survival in the RHS, how does that change the analysis? <!--(Things have changed with R too - To load RGraphviz  go to a new Rscript window and type  `source("http://bioconductor.org/biocLite.R")`   Next, type in `biocLite("Rgraphviz")` After this you will be able to plot the graph of rules.)-->

5. Now download and explore two data sets: elect (election Bush vs. Kerry in 2004) and topmovies (top 1000 movies) 
[These two data sets are located in [https://github.com/rcos/datalab7](https://github.com/rcos/datalab7). They can be imported into R as CSV.
They
are public domain data, although, one of them has been modified to get it into a set of transactions -
similar to how the data is prepared in the text example. For topmovies you might want to explore how many of the movies are sequels, how many movies have the name "man"  or how many star wars movies there are in the list. Find as many interesting things about both datasets as possible. Try to repeat the rule analysis like what was done with the Titanic data. To do this, you may need to manage the data. *discretizeDF* can be used to give histograms for continuous data and *as.factor* can turn string or integer data into factors. Decide what a good RHS is and generate it from the data. For example, are there any rules that distinguish the top 10 grossing movies from the rest? What about sales over $100 million? How would you derive transactions to analyze? You may also want to find which states Bush won and the number of states he won. 

  Note that this is an exploratory exercise. In your lab notes, define a question you are trying to answer (either the questions above, or questions of your own), state how you are going to try and answer the question from the data, and then show your code and the results of your exploration.

6.  Create an Observatory page and a repo page for your project. Create a slack channel. Please choose a license for your repo.
Write a paragraph description of the status of your project - What did you do last week on your project? You only have 4 or 5 more weeks to finish your project.

5. (optional) Read the kaggle [R tutorial on Machine Learning](https://www.datacamp.com/courses/kaggle-tutorial-on-machine-learing-the-sinking-of-the-titanic) (Random forest is also discussed in chapter 4 of the Zhao's book)
(You can login to Kaggle with your facebook or google plus account or register for a new account.)

