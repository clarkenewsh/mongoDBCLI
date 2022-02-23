class Movie {
    constructor(title, actor = "Not specified", rating) {
        this.title = title;
        this.actor = actor;
        this.rating = rating;
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

    async update(collection) {
        // update one from the db
        return await collection.updateOne(
            {title: "Spiderman"}, 
            {$set:{
                actor: `updating actors`
            }  
        }

        );

    }

    async delete(collection, input) {
        return await collection.delete();
    }
}

module.exports = Movie;