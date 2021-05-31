import { MongoClient } from 'mongodb';

const withDB = async operations => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db('react-blog');

        await operations(db);

        client.close();
    } catch (err) {
        res.status(500).send({ message: 'Database Error', err });
    }
}

module.exports = withDB;