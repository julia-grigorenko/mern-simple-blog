import withDB from '../db';

const getArticle = async (req, res) => {
    const articleName = req.params.name;
    await withDB(async db => {
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(articleInfo);
    });
}
const getArticles = async (req, res) => {

    await withDB(async db => {
        const articlesInfo = await db.collection('articles').find().toArray();
        res.status(200).json(articlesInfo);
    });
}
const upvote = async (req, res) => {
    const articleName = req.params.title;

    await withDB(async db => {
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, { '$set': {
            upvotes: articleInfo.upvotes + 1,
        }});
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updatedArticleInfo);
    });
}
const addComment = async (req, res) => {
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
}

module.exports = {
    getArticle,
    getArticles,
    upvote,
    addComment
}