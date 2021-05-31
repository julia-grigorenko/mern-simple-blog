import express from 'express';
const router = express.Router();
import controllers from '../controllers';

router.get('/articles/:name', controllers.getArticle);
router.get('/articles', controllers.getArticles);
router.post('/articles/:title/upvote', controllers.upvote);
router.post('/articles/:name/add-comment', controllers.addComment);

module.exports = router;