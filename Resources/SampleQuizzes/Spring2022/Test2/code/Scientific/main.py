"""
=====
Words
=====
Words/Ladder Graph
------------------
Generate  an undirected graph over the 5757 5-letter words in the
datafile `words_dat.txt.gz`. This example
is described in Section 1.1 in Knuth's book (see [1]_ and [2]_).
References
----------
.. [1] Donald E. Knuth,
   "The Stanford GraphBase: A Platform for Combinatorial Computing",
   ACM Press, New York, 1993.
.. [2] http://www-cs-faculty.stanford.edu/~knuth/sgb.html
"""
# Authors: Aric Hagberg (hagberg@lanl.gov),
#          Brendt Wohlberg,
#          hughdbrown@yahoo.com

#    Copyright (C) 2004-2019 by
#    Aric Hagberg <hagberg@lanl.gov>
#    Dan Schult <dschult@colgate.edu>
#    Pieter Swart <swart@lanl.gov>
#    All rights reserved.
#    BSD license.

import gzip # 1
from string import ascii_lowercase as lowercase #2
import networkx as nx #3
#-------------------------------------------------------------------
#   The Words/Ladder graph of Section 1.1
#-------------------------------------------------------------------
def generate_graph(words): #4
    G = nx.Graph(name="words") #5
    lookup = dict((c, lowercase.index(c)) for c in lowercase) #6
    def edit_distance_one(word): #7
        for i in range(len(word)): #8
            left, c, right = word[0:i], word[i], word[i + 1:] #9
            j = lookup[c]  # 10
            for cc in lowercase[j + 1:]: #11
                yield left + cc + right #12
    candgen = ((word, cand) for word in sorted(words) #13
               for cand in edit_distance_one(word) if cand in words) #14
    G.add_nodes_from(words) #15
    for word, cand in candgen: #16
        G.add_edge(word, cand) #17
    return G #18
def words_graph(): #19
    fh = gzip.open('words_dat.txt.gz', 'r') #20
    words = set() #21
    for line in fh.readlines(): #22
        line = line.decode() #23
        if line.startswith('*'): #24
            continue #25
        w = str(line[0:5]) #26
        words.add(w) #27
    return generate_graph(words) #28
if __name__ == '__main__': #28
    G = words_graph() #30
    print("Graph has %d nodes with %d edges"
          % (nx.number_of_nodes(G), nx.number_of_edges(G))) #31
    print("%d connected components" % nx.number_connected_components(G)) #32
    for (source, target) in [('chaos', 'order'),
                             ('nodes', 'graph'),
                             ('pound', 'marks')]: #33
        print("Shortest path between %s and %s is" % (source, target)) #34
        try: #35
            sp = nx.shortest_path(G, source, target) #36
            for n in sp: #37
                print(n) #38
        except nx.NetworkXNoPath: #39
            print("None") #40
