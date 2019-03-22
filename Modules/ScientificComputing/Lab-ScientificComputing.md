## Lab 6 - Scientific Computation 3/1/2019

<!--
- One/Two page slide presentation of your project and post your slide in RCOS class channel #csci2963-01
-->

#### All of the steps below should be recorded in a github file `Lab6.Md` ####
 
- Graphs and Networks are ubiquitous in Scientific Computations. Networkx is an open source python package located here [https://networkx.github.io/](https://networkx.github.io/)

- A nice tutorial may be found in [https://networkx.github.io/documentation/stable/tutorial.html](https://networkx.github.io/documentation/stable/tutorial.html)

- Your task for this class is to use networkx to do graph theoretic/network computations.

Please do the following problems.

- Download and Install networkx matplotlib (See [http://matplotlib.org/](http://matplotlib.org/))

```bash
sudo apt-get install python-networkx python-matplotlib

```
or

```bash
pip install networkx matplotlib

```
or

```bash
conda install networkx matplotlib

```

- Investigate networkx using examples in [https://networkx.github.io/documentation/stable/tutorial.html](https://networkx.github.io/documentation/stable/tutorial.html), [https://networkx.github.io/documentation/stable/auto_examples/index.html](https://networkx.github.io/documentation/stable/auto_examples/index.html) and [https://networkx.github.io/documentation/stable/reference/index.html](https://networkx.github.io/documentation/stable/reference/index.html) (use this last site as a reference as you continue)

- Stanford Graphbase is a book written by Prof. Donald Knuth and contains many interesting examples on graph algorithms and implementations of programs (written in literate programming style). [Here is an abstract of that book](http://tex.loria.fr/sgb/abstract.pdf). [Dr. Goldschmidt Master's thesis](Masters.pdf) is a Java implementation. These problems are also implemented in networkx.

- Implement the [word ladder game](https://en.wikipedia.org/wiki/Word_ladder) and its variations. (The algorithmic idea behind this
problem is the shortest path algorithm implemented in networkx) [This link](https://github.com/networkx/networkx/blob/master/examples/graph/words.py) provides  a word ladder implementation. **Use this as your initial implementation
for words of length 5. It is not necessary to write your own from scratch** You can find 
[input data (for words of length five ) here](https://github.com/networkx/networkx/blob/master/examples/graph/words_dat.txt.gz) under words\_dat.txt.gz, or use this [direct link](words_dat.txt.gz).
[Words of length four are here](words4_dat.txt.gz) (Do the problem  "words of length 4 and words of length 5 --  {W_n | len(w) =n} and W_4, W_5 )


- Test your word ladder with the following words
    1.   `chaos` to `order`
    2.   `nodes` to `graph`
    3.   `moron` to `smart`
    4.   `pound` to `marks`

-   [For four letter words try 
cold to warm, love to hate](http://wordplay.blogs.nytimes.com/2013/06/19/climb-the-ladder/ )

-  Implement a variation where we consider two words (nodes) to be adjacent if there is a one letter difference without regard to ordering. You will need to change the edit_distance_one function to disregard letter position. Test with the 5 letter examples above. There are several ways to attack this. One way is to use multisets [(Counter)](https://docs.python.org/3.5/library/collections.html#collections.Counter) from the collections module, another is to use permutations from [itertools](https://docs.python.org/3/library/itertools.html?highlight=permutations#itertools.permutations). 

An example:
```
Shortest path between chaos and order is
chaos
echos
chore
coder
order
```

Your path may be different.

- An interesting variation on word ladder is suggested in [http://rexwordpuzzle.blogspot.com/2017/02/actress-form-mixed-martial-arts.html](http://rexwordpuzzle.blogspot.com/2017/02/actress-form-mixed-martial-arts.html) - Your task is to find words that precede SLID, DOTE, HERD and OMEN and the words that follow (immediately) NINE, SELL, STAT and WHAT. To do this, create a function so that given the word SLID you print out all of the words that are 1 letter away from it (ie SLIT, SAID etc.). Do this for all all 8 of these words.

- Document your program in a lab6 writeup and then submit a text file with a link to this file via Submitty. Your lab report should contain:
	
	- Your results for the 4 five letter pairs
	- Your code for the four letter solution
	- Your results for the 2 four letter pairs
	- Your code for the unordered solution
	- Your results for the 4 five letter pairs using the unordered implementation
	- (OPTIONAL) your code for precede/follow
	- (OPTIONAL) precede/follow results

<!--
- Then create/fork a github repository for your project and work on your first commit
-->
	