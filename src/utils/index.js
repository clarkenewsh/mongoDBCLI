class Movie {
    constructor(title, actor = "Not specified") {
        this.title = title;
        this.actor = actor;
    }

    async add(collection) {
        // add this to the database
        await collection.insertOne(this);
        return "Success";
    }

    async list(collection) {
        // List all movies in the db - return the await connection
        return await collection.find().toArray();
    }
}

module.exports = Movie;