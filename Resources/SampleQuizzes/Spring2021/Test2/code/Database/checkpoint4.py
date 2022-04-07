from pymongo import MongoClient

def insert_or_update(collection, ident, field, value):
    one = collection.find_one({"_id":ident})
    if one != None:
        collection.update_one({"_id":ident}, {"$set":{field: value}})
    else:
        collection.insert_one({"_id":ident, field:value})


if __name__ == '__main__':
    client = MongoClient()
    db = client.yankees
    collection = db.menu

    for line in open("file1.txt"):
        name = line.strip().split()
        insert_or_update(collection, name[0], "name", name[1])

    for line in open("file2.txt"):
        drink = line.strip().split()
        insert_or_update(collection, drink[0], "drink", drink[1])

