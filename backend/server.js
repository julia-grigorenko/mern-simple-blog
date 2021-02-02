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

app.get('/api/articles/:name', async (req, res) => {
    const articleName = req.params.name;
    await withDB(async db => {
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(articleInfo);
    });
});

app.get('/api/articles', async (req, res) => {

    await withDB(async db => {
        const articlesInfo = await db.collection('articles').find().toArray();
        res.status(200).json(articlesInfo);
    });
});

app.post('/api/articles/:name', async (req, res) => {
    const articleName = req.params.name;

    await withDB(async db => {
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(articleInfo);
    });
});
app.post('/api/articles/:title/upvote', async (req, res) => {
    const articleName = req.params.title;

    await withDB(async db => {
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, { '$set': {
            upvotes: articleInfo.upvotes + 1,
        }});
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updatedArticleInfo);
    });
});
app.post('/api/articles/:name/add-comment', async (req, res) => {
    const articleName = req.params.name;
    const newComment = req.body;

    await withDB(async (db) => {
        const articleInfo = await db.collection('articles').findOne({ name: articleName });

        articleInfo.comments.push(newComment);

        await db.collection('articles').updateOne({ name: articleName }, { '$set': {
            comments: articleInfo.comments
        }});

        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updatedArticleInfo);
    });
});


app.listen(port, () => console.log(`Server is listening on port: ${port}`));