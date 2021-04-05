# MongoDB Lab
### 8/2/2018

## Checkpoint 1: Install MongoDB

For the first checkpoint of this lab, we'll work on just getting a proper installation of MongoDB. MongoDB has some good documentation for Linux, OSX and Windows here:  

[https://docs.mongodb.org/manual/installation/](https://docs.mongodb.org/manual/installation/)

Select your system from Tutorials/MongoDB Community Edition, and follow their instructions for setup. For those of you who are using WSL2, I used the installation instructions in the lecture notes [https://github.com/rcos/CSCI-4470-OpenSource/blob/master/Modules/10.Databases/source/index.rst](https://github.com/rcos/CSCI-4470-OpenSource/blob/master/Modules/10.Databases/source/index.rst) I generally prefer doing this on Linux, but just to test things out, I did the install and this lab using the WSL 2 install and it seems to work. 

After you've finished the MongoDB installation instructions, to test if MongoDB is working, open two terminal windows. In the first one type `mongod`, which starts the MongoDB Daemon. If `mongod` gives you an error that the database directory doesn't exist, either create it and try again or use the `--dbpath` 
 to point the database at an appropriate directory.

If all goes well you should have a MongoDB database instance running and bound on localhost:27017. In the second terminal window, type `mongo`, which is the MongoDB shell and lets you connect to your server instance.

If all goes well again, the `mongod` window should show a line about "connection accepted" and the `mongo` window should give you a single `>` terminal prompt. 

Keep these two terminal windows open and running the way they are, we'll need them later.

**Add a screenshot of your connection accepted message (from the *mongod* window) to your lab notebook.**

It should look something like:

```
2019-04-03T16:23:40.890-0400 I NETWORK  [listener] connection accepted from 127.0.0.1:64983 #1 (1 connection now open)
2019-04-03T16:23:40.891-0400 I NETWORK  [conn1] received client metadata from 127.0.0.1:64983 conn1: { application: { name: "MongoDB Shell" }, driver: { name: "MongoDB Internal Client", version: "4.0.7" }, os: { type: "Darwin", name: "Mac OS X", architecture: "x86_64", version: "18.2.0" } }
```

## Checkpoint 2: Load Some Data

We're going to use a sample data set to start off with MongoDB, so let's load that in.

First let's create a fork of the files necessary for this lab: [https://github.com/rcos/mongodb_lab](https://github.com/rcos/mongodb_lab)

After creating your fork, clone it & cd into it

```
>> git clone <url to my fork>
>> cd mongodb_lab
```

Now we're going to load the sample data. The sample data is in the definitions.json file. Open that up quickly and skim through it to see what data we're going to import and how it's structured. Notice that each line is a JSON record that will be inserted into MongoDB.

To import the dataset, we're going to use the tool `mongoimport`
From the mongodb\_lab directory execute the following command:

```
>>> mongoimport --host=127.0.0.1 --db mongo_db_lab --collection definitions --file definitions.json
```

If needed, you can install `mongoimport` using: `sudo apt install mongo-tools`.

You can read about the mongoimport command at: [https://docs.mongodb.org/manual/reference/program/mongoimport/](https://docs.mongodb.org/manual/reference/program/mongoimport/)

**Add a screenshot of your createCollection message (from the *mongod* window) to your lab notebook.**

It should look something like:

```
2019-04-03T16:37:08.580-0400 I NETWORK  [listener] connection accepted from 127.0.0.1:49440 #2 (1 connection now open)
2019-04-03T16:37:08.593-0400 I STORAGE  [conn2] createCollection: mongo_db_lab.definitions with generated UUID: 84db43be-78eb-4a99-9260-55b3746d344d
2019-04-03T16:37:08.649-0400 I NETWORK  [conn2] end connection 127.0.0.1:49440 (0 connections now open)
```

## Checkpoint 3: Basic Queries

Now let's figure out how to interact with the MongoDB database we've created. We're going to use the mongo shell for this (the `mongo` terminal window we have running). Inside the mongo shell, we can write queries with a JavaScript-like syntax.

First, let's connect to the right database. That can be done with the following command:

```
> use mongo_db_lab
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

```
> db.definitions.find()
> db.definitions.findOne()
> db.definitions.find({word: "Capitaland"}) 
> db.definitions.find({_id: ObjectId("56fe9e22bad6b23cde07b8ce")})
```

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

After you are satisfied with your changes, dump the database back to json and (OPTIONAL) **make a pull request.**

Specifically for this lab, {query} should be an existing word in the database and { new document } is a new definition that you want
to make for that word. When you run the update command you overwrite the previous definition with the one you specify.

```
>>> mongoexport --host=127.0.0.1 --db mongo_db_lab --collection definitions --out definitions.json
```

**Your lab report should contain the results of finding both the record you entered, the record you changed, and a `git diff` of your new definitions file.**

## Checkpoint 4: Driving Queries

Now that we've done some basic queries, we're going to do them all again but with the PyMongo Python driver!

First reset _definitions.json_. So long as you haven't committed your changes, this is as simple as entering:

```
>>> git reset --hard
```

- Drop the database (mongo shell) `db.definitions.drop()`
- Run `mongoimport` again

One of the important things about MongoDB is the availability of docs. Use them to perform the following with a python script.  You can start from the code in _checkpoint4.py_ and you can use [https://https://docs.mongodb.com/drivers/pymongo/](https://docs.mongodb.com/drivers/pymongo/) to help you work out the proper commands. The `Tutorial` and the `API Reference` will be of particular use.

- Fetch all records
- Fetch one record
- Fetch a specific record
- Fetch a record by object id
- Insert a new record

All of these (including `pprint`) are covered in the tutorial.

**Include the script and the pprint output in your lab report.**


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
  { "_id" : ObjectId("56fe9e22bad6b23cde07b8eb"), "definition" : " n. 
  General Personal Aptitude, the rating by which the rest of the world 
  values your existence. Though you'll hear of these, RPI won't give you 
  one; being a technical school, they have to complicate it. See QPA.", 
  "word" : "GPA", "dates" : [ "2019-04-04T02:14:31.460Z" ] }
}
```

And if we called it again:

```
{
  { "_id" : ObjectId("56fe9e22bad6b23cde07b8eb"), "definition" : " n. 
  General Personal Aptitude, the rating by which the rest of the world 
  values your existence. Though you'll hear of these, RPI won't give you 
  one; being a technical school, they have to complicate it. See QPA.", 
  "word" : "GPA", "dates" : ["2019-04-04T02:14:31.460Z", 
  "2019-04-04T02:14:43.701Z" ] }
}
```

**Hint**: Checkout the `datetime` python module and the `datetime.datetime.utcnow()` and `datetime.datetime.isoformat()` commands for the date part and at the 
MongoDB documentation for $push for managing the array of dates in the update.

You will need to include the script in your lab report. Run it until you get a duplicate. Then go and `find` that entry in the mongo database. Include the result of this find in your lab report.

**When you are finished, push your report to your lab notebook and submit a text file with a link to the lab report to Submitty.**



