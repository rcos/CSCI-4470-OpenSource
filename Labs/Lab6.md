## Lab 6 - Scientific Computation 3/3/2017

- One/Two page slide presentation of your project and post your slide in RCOS class channel #csci2963-01 
- Graphs and Networks are ubiquitous in Scientific Computations. Networkx is an open source python package located here https://networkx.github.io/

- A nice tutorial may be found in http://networkx.readthedocs.io/en/networkx-1.10/tutorial/index.html

- Your task for this class is to use networkx to do graph theoretic/network computations.

Please do the following problems.

- Download and Install networkx and download install matplotlib http://matplotlib.org/ 

```bash

sudo apt-get install python-networkx python-matplotlib

```

- Investigate networkx using examples in http://networkx.readthedocs.io/en/networkx-1.11/reference/introduction.html  , http://networkx.readthedocs.io/en/networkx-1.11/examples/  and http://networkx.readthedocs.io/en/networkx-1.11/reference/index.html(use this as a reference as you continue)

- Stanford Graphbase is a book written by Prof. Donald Knuth and contains many interesting examples on graph algorithms and implementations of programs (written in literate programming style). [Here is an abstract of that book](http://tex.loria.fr/sgb/abstract.pdf) - [Dr. Goldschmidt Master's thesis](http://www.cs.rpi.edu/research/groups/pb/jgb/Masters.pdf) is a Java implementation.  These problems are also implemented in networkx.

- Implement the [word ladder game]( https://en.wikipedia.org/wiki/Word_ladder) and its variations. (The algorithmic idea behind this
problem is the shortest path algorithm implemented in networkx) [This link](https://github.com/networkx/networkx/blob/master/examples/graph/words.py) provides  a word ladder implementation - [Another implementation (simpler but slower) is here](http://www.csie.ntu.edu.tw/~azarc/sna/networkx/examples/graph/words.py). You can find 
[input data (for words of length five ) is here]( https://www.csie.ntu.edu.tw/~azarc/sna/networkx/examples/graph/) under words.da.txt.gz or use this [direct link]( http://www.cs.rpi.edu/research/groups/pb/jgb/java/words.dat).
[Words of length four are here](http://www.cs.rpi.edu/research/groups/pb/jgb/java/words4.dat) (Do the problem  "words of length 4 and words of length 5 --  {W_n | len(w) =n} and W_4, W_5 )


- Test your word ladder with the following words
    1.   `chaos` to `order`
    2.   `nodes` to `graph`
    3.   `moron` to `smart`
    4.   `pound` to `marks`

-   [For four letter words try 
cold to warm , love to hate]( http://wordplay.blogs.nytimes.com/2013/06/19/climb-the-ladder/ )

-  Implement a variation where we consider two words (nodes) are adjacent if the number of letters that differ (not necessarily in same position) by 1. (You need to the change the edit_distance function). Repeat with the same data.
(use multiset from collection)

An example:
```
Shortest path between chaos and order is
chaos
echos
chore
coder
order
```

- An interesting variation on word ladder is suggested in http://rexwordpuzzle.blogspot.com/2017/02/actress-form-mixed-martial-arts.html - Your task is to find words that precede SLID, DOTE, HERD and OMEN and the words that follow (immediately) NINE, SELL, STAT and WHAT. To do this, create a function so that given the word SLID you print out all of the words that are 1 letter away from it (ie SLIT, SAID etc.). Do this for all all 8 of these words.

- Create/fork a github repository for your project and work on your first commit
