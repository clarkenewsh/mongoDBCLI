// bring in dotenv and run the config - for react full stack apps "dotenv.local"
require("dotenv").config();
const { MongoClient } = require("mongodb");

// Access our environment variables
const client = new MongoClient(process.env.MONGO_URI);

// set up connection to db
const connection = async () => {
    try {
        // open up connection to db
        await client.connect();
        // create db inside the cluster
        const db = client.db("Movies");
        // Individual items stored within the db - return to manipulate the db in other files
        return db.collection("film");

    } catch (error) {
        console.log(error);
    }
}

module.exports = {client, connection};