import express from 'express';
import cors from 'cors';

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8000;

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

app.listen(port, () => console.log(`Server is listening on port: ${port}`));