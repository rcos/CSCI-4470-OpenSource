
ngoDB shell version: 3.0.6
connecting to: test
Server has startup warnings:
2016-04-05T12:58:38.821-0400 I CONTROL  [initandlisten]
2016-04-05T12:58:38.821-0400 I CONTROL  [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
>
>
>
>
>
>
> show dbs
local  0.078GB
test   0.078GB
> 0.1 + 0.1 + 0.1 == 0.3
false
>
>
>
>
>
>
>
>
>
> use chairs
switched to db chairs
> db
chairs
>
>
> show collections
>
>
> db.inventory.insert({numLegs: 2})
WriteResult({ "nInserted" : 1 })
> show collections
inventory
system.indexes
> db.inventory
chairs.inventory
> db.inventory.find()
{ "_id" : ObjectId("5703ef7171004779c9d67782"), "numLegs" : 2 }
> db.inventory.insert({numLegs: 3})
WriteResult({ "nInserted" : 1 })
>
> db.inventory.find()
{ "_id" : ObjectId("5703ef7171004779c9d67782"), "numLegs" : 2 }
{ "_id" : ObjectId("5703ef9571004779c9d67783"), "numLegs" : 3 }
>
>
> db.inventory.find().pretty()
{ "_id" : ObjectId("5703ef7171004779c9d67782"), "numLegs" : 2 }
{ "_id" : ObjectId("5703ef9571004779c9d67783"), "numLegs" : 3 }
> db.inventory.insert({numLegs: 3})
WriteResult({ "nInserted" : 1 })
> db.inventory.insert({numLegs: 4})
WriteResult({ "nInserted" : 1 })
>
>
>
> db.inventory.find().pretty()
{ "_id" : ObjectId("5703ef7171004779c9d67782"), "numLegs" : 2 }
{ "_id" : ObjectId("5703ef9571004779c9d67783"), "numLegs" : 3 }
{ "_id" : ObjectId("5703efaf71004779c9d67784"), "numLegs" : 3 }
{ "_id" : ObjectId("5703efb071004779c9d67785"), "numLegs" : 4 }
>
>
>
>
> db.inventory.find({numLegs: 3})
{ "_id" : ObjectId("5703ef9571004779c9d67783"), "numLegs" : 3 }
{ "_id" : ObjectId("5703efaf71004779c9d67784"), "numLegs" : 3 }
> db.inventory.find({_id: ObjectId("5703efb071004779c9d67785")})
{ "_id" : ObjectId("5703efb071004779c9d67785"), "numLegs" : 4 }
>
>
>
>
> db.inventory.update({numLegs: 2}, {numLegs: 3})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
>
>
>
> db.inventory.fidn()
2016-04-05T13:04:32.307-0400 E QUERY    TypeError: Property 'fidn' of object chairs.inventory is not a function
    at (shell):1:14
> db.inventory.find()
{ "_id" : ObjectId("5703ef7171004779c9d67782"), "numLegs" : 3 }
{ "_id" : ObjectId("5703ef9571004779c9d67783"), "numLegs" : 3 }
{ "_id" : ObjectId("5703efaf71004779c9d67784"), "numLegs" : 3 }
{ "_id" : ObjectId("5703efb071004779c9d67785"), "numLegs" : 4 }
>
>
>
>
>
>
> db.inventory.update({numLegs: 3}, {numLegs: 2}, {multi: 1})
WriteResult({
        "nMatched" : 0,
        "nUpserted" : 0,
        "nModified" : 0,
        "writeError" : {
                "code" : 9,
                "errmsg" : "multi update only works with $ operators"
        }
})
> db.inventory.update({numLegs: 3}, {numLegs: 2}, {multi: true})
WriteResult({
        "nMatched" : 0,
        "nUpserted" : 0,
        "nModified" : 0,
        "writeError" : {
                "code" : 9,
                "errmsg" : "multi update only works with $ operators"
        }
})
>
>
> db.inventory.update({numLegs: 3}, {$set: {numLegs: 2}}, {multi: true})
WriteResult({ "nMatched" : 3, "nUpserted" : 0, "nModified" : 3 })
>
>
> db.inventory.find({ "_id" : ObjectId("5703ef7171004779c9d67782"), "numLegs" : 2 })
{ "_id" : ObjectId("5703ef9571004779c9d67783"), "numLegs" : 2 }
{ "_id" : ObjectId("5703efaf71004779c9d67784"), "numLegs" : 2 }
{ "_id" : ObjectId("5703efb071004779c9d67785"), "numLegs" : 4 }
>
>
>
> db.inventory.update({numLegs: 2}, {$set: {name: "Bob"}}, {multi: true})
WriteResult({ "nMatched" : 3, "nUpserted" : 0, "nModified" : 3 })
>
>
> db.inventory.find(){ "_id" : ObjectId("5703efb071004779c9d67785"), "numLegs" : 4 }
{ "_id" : ObjectId("5703ef7171004779c9d67782"), "numLegs" : 2, "name" : "Bob" }
{ "_id" : ObjectId("5703ef9571004779c9d67783"), "numLegs" : 2, "name" : "Bob" }
{ "_id" : ObjectId("5703efaf71004779c9d67784"), "numLegs" : 2, "name" : "Bob" }
>
>
> db.inventory.find({name: "Bob"})
{ "_id" : ObjectId("5703ef7171004779c9d67782"), "numLegs" : 2, "name" : "Bob" }
{ "_id" : ObjectId("5703ef9571004779c9d67783"), "numLegs" : 2, "name" : "Bob" }
{ "_id" : ObjectId("5703efaf71004779c9d67784"), "numLegs" : 2, "name" : "Bob" }
>
>
> db.inventory.find({name: ""})
> db.inventory.find({name: "Bill"})
>
>
>
> db.inventory.find({$exists: {name: 1})
...
... ^C

> db.inventory.find({$exists: {name: 1}})
Error: error: {
        "$err" : "Can't canonicalize query: BadValue unknown top level operator: $exists",
        "code" : 17287
}
>
>
> db.inventory.find({name: {$exists: 1}})
{ "_id" : ObjectId("5703ef7171004779c9d67782"), "numLegs" : 2, "name" : "Bob" }
{ "_id" : ObjectId("5703ef9571004779c9d67783"), "numLegs" : 2, "name" : "Bob" }
{ "_id" : ObjectId("5703efaf71004779c9d67784"), "numLegs" : 2, "name" : "Bob" }
>
>
> db.inventory.find({name: {$exists: 0}})
{ "_id" : ObjectId("5703efb071004779c9d67785"), "numLegs" : 4 }
>
>
>
> db.inventory.update({name: {$exists: 0}}, {$set: {name: "Bill"})
...
... ^C

> db.inventory.update({name: {$exists: 0}}, {$set: {name:"Bill
2016-04-05T13:09:09.505-0400 E QUERY    SyntaxError: Unexpected token ILLEGAL
> db.inventory.update({name: {$exists: 0}}, {$set: {name:"Bill"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
>
>
> db.inventory.find()
{ "_id" : ObjectId("5703ef7171004779c9d67782"), "numLegs" : 2, "name" : "Bob" }
{ "_id" : ObjectId("5703ef9571004779c9d67783"), "numLegs" : 2, "name" : "Bob" }
{ "_id" : ObjectId("5703efaf71004779c9d67784"), "numLegs" : 2, "name" : "Bob" }
{ "_id" : ObjectId("5703efb071004779c9d67785"), "numLegs" : 4, "name" : "Bill" }
>
>
>
>
> ^C
bye
~ %

