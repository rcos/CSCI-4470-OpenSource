# MongoDB Lab for CSCI2963
### 3/31/2017

## Checkpoint 1: Install MongoDB

For the first checkpoint of this lab, we'll work on just getting a proper installation of MongoDB. Fortunately MongoDB's documentation is really awesome.

https://docs.mongodb.org/manual/installation/

Select your system from Tutorials/MongoDB Community Edition, and follow their instructions for setup.

After you've finished the MongoDB installation instructions, to test if MongoDB is working, open two terminal windows. In the first one type `mongod`, which starts the MongoDB Daemon.

If all goes well you should have a MongoDB database instance running and bound on localhost:27017. In the second terminal window, type `mongo`, which is the MongoDB shell and lets you connect to your server instance.

If all goes well again, the `mongod` window should show a line about "connection accepted" and the `mongo` window should give you a single `>` terminal prompt.

Keep these two terminal windows open and running the way they are, we'll need them later.


## Checkpoint 2: Load Some Data

We're going to use a sample data set to start off with MongoDB, so let's load that in.

First let's create a fork of the files necessary for this lab: https://github.com/raymondjacobson/csci2963_mongodb_lab

After creating your fork, clone it & cd into it
```
>> git clone <url to my fork>
>> cd csci2963_mongodb_lab
```

Now we're going to load the sample data. The sample data is in the definitions.json file. Open that up quickly and skim through it to see what data we're going to import and how it's structured. Notice that each line is a JSON record that will be inserted into MongoDB.

To import the dataset, we're going to use the tool `mongoimport`
From the csci2963_mongodb_lab directory:

```
>>> mongoimport --host=127.0.0.1 --db csci2963 --collection definitions --file definitions.json
```

Docs for mongoimport can be found here: https://docs.mongodb.org/manual/reference/program/mongoimport/

## Checkpoint 3: Basic Queries

Now let's figure out how to interact with the MongoDB database we've created. We're going to use the mongo shell for this (the `mongo` terminal window we have running). Inside the mongo shell, we can write queries with a JavaScript-like syntax.

First, let's connect to the right database. That can be done with the following command:

```
> use csci2963
```

This sets the variable `db` in our shell, so if we run

```
> db
```
It will show us what database we're connected to. We can then access our definitions collection like so:
```
> db.definitions
```

Now let's execute the following commands and take note of what they do:

- `db.definitions.find()`
- `db.definitions.findOne()`
- `db.definitions.find({word: "Capitaland"})` # the content you provide in the { } is pattern matched to find your document
- `db.definitions.find({_id: ObjectId("56fe9e22bad6b23cde07b8ce")})`

Now we're going to insert a new record, update the definition of a word, and submit a pull request.

Come up with your own definition and use:
```
> db.definitions.insert({word: <word here>, definition: <definition here>})
```

You can update a record like so:
```
> db.definitions.update({ query }, { new document })
```
Where query is something like what you provided to `db.definitions.find` and new document is what you want to replace the old one with.

After you are satisfied with your changes, let's dump the database back to json and make a pull request.

Specifically for this lab, {query} should be an existing word in the database and { new document } is a new definition that you want
to make for that word. When you run the update command you overwrite the previous definition with the one you specify.

```
>>> mongoexport --host=127.0.0.1 --db csci2963 --collection definitions --out definitions.json
```

Submit a PR now.

## Checkpoint 4: Driving Queries

Now that we've done some basic queries, we're going to do them all again but with the PyMongo Python driver!

First let's

- Drop the database (mongo shell) `db.definitions.drop()`
- Run `mongoimport` again

https://api.mongodb.org/python/current/tutorial.html

One of the greatest things about MongoDB is the availability of docs. Use them to perform the following with a python script.

- Fetch all records
- Fetch one record
- Fetch a specific record
- Fetch a record by object id
- Insert a new record

Show a TA the code that you used to do these things.


## Checkpoint 5: Random Word Requester

In this part of the lab, we're going to create a small Python app that runs from the command line to demonstrate that we are all database masters. We should know enough now to build this without hand-holding.

Open the file checkpoint5.py (in the lab repo) and edit it so that:

Calling `python checkpoint5.py` will print out a random word in the database (and it's definition) and also dynamically add to the database a log of the day that the word was printed.

In other words, your schema before-hand looks like:
```
{
  word: "Approach",
  definition: " n. (RPI) The decaying ruins of the old Rensselaer gateway from Troy."
}
```

And after calling the script, it should look something like:

```
{
  word: "Approach",
  definition: " n. (RPI) The decaying ruins of the old Rensselaer gateway from Troy."
  dates: [2016-03-31 23:05:14.966395]
}
```

And if we called it again:

```
{
  word: "Approach",
  definition: " n. (RPI) The decaying ruins of the old Rensselaer gateway from Troy."
  dates: [2016-03-31 23:05:14.966395, 2016-03-31 23:06:08.152208]
}
```

Hint: Look at MongoDB documentation for $push

