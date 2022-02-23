// import yargs
const yargs = require("yargs");
// import client, connection
const {client, connection} = require("./db/connection");
// imports movie class
const Movie = require("./utils");

const app = async (yargsObj) => {
    // open connection that is returned from 
    const collection = await connection();
    try {
        if(yargsObj.add) {
            // take movie info, add it to the mongodb database and console.log a success message
            const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.rating);
            console.log(await movie.add(collection));
        } else if (yargsObj.list) {
            // list all movies in database
            const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.rating);
            console.log(await movie.list(collection));

        } else if (yargsObj.update) {
            // update a single movie in the db
            const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.rating);
            console.log(await movie.update(collection));

        }   else if (yargsObj.delete) {
            // delete a single movie in the db
            const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.rating);
            console.log(await movie.delete(collection));

        } else {
            console.log("incorrect command");
        }
        // close connection
        await client.close();
    } catch (error) {
        console.log(error);
    }
}

app(yargs.argv);