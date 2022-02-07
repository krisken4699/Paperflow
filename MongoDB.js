const MongoClient = require('mongodb').MongoClient;
const MONGODBURI = "mongodb+srv://Admin1:ppsshop@ppsshop2.v2jh7.mongodb.net/Products?retryWrites=true&w=majority";
const client = new MongoClient(MONGODBURI, { useNewUrlParser: true, useUnifiedTopology: true });

async function insertOne(json, database, collectionName) {
  try {
    await client.connect();
    const collection = client.db(database).collection(collectionName);
    const result = await collection.insertOne(json);
    // console.log(result)
    return (await result.insertedId);
  } catch (err) {
    if (err) return (err);
  } finally {
    await client.close();
  }
}
// insertOne({ name: "Item name 1", id: "bribZNKFb_N", image: "https://i.pinimg.com/originals/c6/5b/80/c65b8092e8dee33aa662feebeea792bf.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum atque dolores, quos veritatis nulla culpa maiores, quaerat voluptatem esse odio quas dolore laborum ratione eos officia aliquam labore, nostrum in?", sellerID: "sellerID 1", price: 0, category: [] }, 'Products', 'Products');

async function find(json, options, database, collectionName) {
  try {
    await client.connect();
    const collection = client.db(database).collection(collectionName);
    const query = json;
    const cursor = collection.find(query, options);
    // print a message if no documents were found
    if ((await cursor.count()) === 0) {
      return (null);
    }
    // replace console.dir with your callback to access individual elements
    return (await cursor.toArray())
  }
  catch (err) {
    if (err) return (err);
  } finally {
    await client.close();
  }
}
async function findOne(query, options, database, collectionName) {
  try {
    await client.connect();
    const collection = client.db(database).collection(collectionName);

    // const options = {
    //   // sort matched documents in descending order by rating
    //   sort: { "imdb.rating": -1 },
    //   // Include only the `title` and `imdb` fields in the returned document
    //   projection: { _id: 0, title: 1, imdb: 1 },
    // };
    const result = await collection.findOne(query, options);
    // since this method returns the matched document, not a cursor, print it directly
    if (result.length === 0)
      return (null)
    return (result)
  }
  catch (err) {
    if (err) return (err);
  } finally {
    await client.close();
  }
}

module.exports.find = function (json, options, database, collectionName) {
  return find(json, options, database, collectionName);
}
module.exports.findOne = function (query, options, database, collectionName) {
  return find(query, options, database, collectionName);
}
module.exports.insertOne = function (json, database, collectionName) {
  return insertOne(json, database, collectionName);
}


// 120000 = 120 second * 1000ms