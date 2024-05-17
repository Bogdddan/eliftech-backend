const { MongoClient, ServerApiVersion } = require('mongodb');
const DB_URI = "mongodb+srv://Bogdan:b77Ix808hCvn9tXm@mycluster.zizq2do.mongodb.net/?retryWrites=true&w=majority&appName=myCluster";

const client = new MongoClient(DB_URI);

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

run();