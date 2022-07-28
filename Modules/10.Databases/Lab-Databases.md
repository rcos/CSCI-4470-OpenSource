# Database Lab

## Checkpoint 0: Project Updates

There are real complications of Open Source Software that arise from needing to manage community rather than just the technical details. Three (kind of recent?) well-publicized
events highlight these complexities. We will discuss these during class on August 12. Below are some resources for you to review. Google around to find more. You should make one (or more) of these topics the subject of your blog this week. Put a link to your blog entry into your lab report and be ready to discuss what you write (in some format ... a debate, round table discussion, or maybe groups of single topics) during class on the twelfth.

Consider different aspects of the cases ... Maybe what other members of the community might think about the actions? Were the actions justified? Do they ultimately help or hurt? What are the unintended consequences. There are no real right or wrong answers.

I encourage you to discuss these topics with your neighbors. Then each of you please write at least one well-formed
paragraph on any part of this and post it to your Blog. Put a link to your blog in your Lab Report for today.

- MongoDB License change (You can find many examples, these are just a few. Google it!)
    - [Percona immediately after the change](https://www.percona.com/blog/2018/10/18/percona-statement-on-mongodb-community-server-license-change/#:~:text=MongoDB%2C%20Inc.%20announced%20it%20has%20elected%20to%20change,license%20better%20suited%20for%20the%20age%20of%20Software-as-a-Service.) 
    - [Same company a year later](https://www.percona.com/blog/2020/06/16/why-is-mongodbs-sspl-bad-for-you/)
    - [License and some analysis](https://linuxreviews.org/Server_Side_Public_License)
    - [One more for good luck!](https://www.scylladb.com/2018/10/22/the-dark-side-of-mongodbs-new-license/)
- Faker.js and Color.js
    - [Summary](https://www.theverge.com/2022/1/9/22874949/developer-corrupts-open-source-libraries-projects-affected)
    - [Additional Details](https://snyk.io/blog/open-source-npm-packages-colors-faker/)
- Node IPC
    -  [Summary](https://thehackernews.com/2022/03/popular-npm-package-updated-to-wipe.html)
- GitHub Copilot
    - [Software Freedom Conservancy](https://sfconservancy.org/blog/2022/feb/03/github-copilot-copyleft-gpl/)
    - [OSI](https://docs.google.com/document/d/1_5CKLbzjXkHDpVLepOAmdAmDL9Gh6vbI_zAn6ihv_AU/edit?usp=sharing)
    - [ZDNet](https://docs.google.com/document/d/1_5CKLbzjXkHDpVLepOAmdAmDL9Gh6vbI_zAn6ihv_AU/edit?usp=sharing)
    - [Deep Dive AI](https://deepdive.opensource.org/)

For those of you who are conspiracy minded, you might want to consider what steps you could take to undermine the legitimacy of the Open Source movement and to discredit it. Are those steps any different from the first three bullets? For Copilot, there are several questions. Is Copilot trained and used legally? Ethically? Does it violate copyright or licensing?

## Checkpoint 1: Install CouchDB

For the first checkpoint of this lab, we'll work on just getting a proper running instance of CouchDB. CouchDB has some good documentation for Linux, OSX and Windows here:  

[https://docs.couchdb.org/en/stable/install/index.html](https://docs.couchdb.org/en/stable/install/index.html)

I have personally installed it in my WSL2 Ubuntu using the Linux instructions in Section 1.1.1 and using the instructions for Docker. I have not tried the rest. Going by what I found, I expect that the install instructions will *almost* work. You may need to play a little. 

In particular,
for **WSL Ubuntu**, the installation assumes that it is installed in the directory ```/home/couchdb/bin/couchdb``` when it actually installs it in
```/opt/couchdb/bin/couchdb```. And for **Docker**, be sure to export the port 5984 using ```-p 5984:5984```. Note that by default any data you put into couchdb in a Docker container will go away when you kill the image. If you want it to persist, you will need to use ```-v /opt/couchdb/data:<mydatadirectory>``` to bind the docker database directory to actual storage on your machine.

I expect similar minor issues are in most of the install instructions.

Whichever, way you choose to install couchdb, I recommend you do it stand-alone for simplicity and that you enable replication. Make sure you complete the [setup](https://docs.couchdb.org/en/stable/setup/index.html#setup) and if you don't give an administrator name, it is probably *admin*.

Once you are running, open a browser and go to ```http://localhost:5984```

**Add a screenshot of the message you get to your lab report.**

It should look something like:

```
{"couchdb":"Welcome",
 "version":"3.2.1",
 "git_sha":"244d428af",
 "uuid":"a3cc56d36b644ee376e45661aeacf43b",
 "features":["access-ready","partitioned","pluggable-storage-engines",
             "reshard","scheduler"],
 "vendor":{"name":"The Apache Software Foundation"}
}
```

## Checkpoint 2: Quick Tour

Now you are going to walk through the first part of the *couchdb* Tutorial at [https://docs.couchdb.org/en/stable/intro/tour.html](https://docs.couchdb.org/en/stable/intro/tour.html). This is the demo I did in class. It requires cURL and a browser. If you don't have cURL you can install it from: [https://curl.se/download.html](https://curl.se/download.html).) 

**Grab screenshots and capture your output from cURL and Fauxton as you go and put them in your lab report.**

## Checkpoint 3: Now Complete the API Tutorial

Walk through [https://docs.couchdb.org/en/stable/intro/api.html](https://docs.couchdb.org/en/stable/intro/api.html)

**Grab screenshots and capture your output as you go and put them in your lab report.**

## Checkpoint 4: What Did We Miss?

We covered most of the necessary database operations, but one thing we didn't cover was finding selected documents via **cURL**.  If you look at the Fauxton Tutorial, you were able to do a find using *Mango* and two *json* structures: an **index** and a **selector**. Technically, the *index* is optional, but for large data bases it is necessary to make efficient queries. Let's see what happens if we don't have it first.

1. The following cURL command can be used to select movies from our **hello-world** database based on the given year:

    ```
    curl -X POST localhost:5984/hello-world/_find -d '{
       "selector": {
          "year": {
             "$gt": 1987
        }
      }
    }' -H 'Content-Type: application/json'
    ```
    
    Note that this should run correctly and not give an error messages because we previously defined an index for movies based on year in Fauxton. 
**Run it and paste the results in your lab report.**

2. Modify the above command to find all movies whose titles come after "L" in alphabetic order. (You can be more creative here if you would like, but this is a simple change of indices.) **Run your command and paste it and your results, including any warnings, into your lab report.**
3. The warning you got in 2 is telling you that this is an inefficient operation. Couchdb wants to optimize your queries so that it can do them fast. In order to do this, it needs to generate a B-Tree based on whichever fields we may want to search on. However, since documents can have arbitrarily large numbers of fields, and databases can be huge, this "indexing" can take a long time and eat up a lot of space. We need to tell couchdb which fields we are interested in. Below is the cURL call to create the "year-json-index" index you created in Fauxton.

    ```
    curl -X POST admin:admin@localhost:5984/hello-world/_index -d '{
       "index": {
          "fields": [
             "year"
          ]
       },
       "name": "year-json-index",
       "type": "json"
    }' -H 'Content-Type: application/json'
    ```

    Based on the above command, you should be able to create a new commmand to generate an index based on title. **Run your command and paste it and your results into your lab report.**

4. **Finally, rerun your movie title query and paste it and your results into your lab report.** It won't be any faster because we only have 3 movies in our database, but it won't complain any more, and it will remain fast as our database grows.




<!---

** This is supposed to be commented out. Hopefully, it is with your reader. If not, apologies! I plan to add some of this back, but I need to see how long this takes the class to accomplish the first part before deciding if and how muh of this can come back in.**

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

--->

**When you are finished, push your report to your lab notebook and submit a link to the repository on Submitty.**



