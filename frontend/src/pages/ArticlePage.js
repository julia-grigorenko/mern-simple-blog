import React, { useState, useEffect } from 'react';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';

const ArticlePage = ({ match }) => {
    const { name } = match.params;

    const [articleInfo, setArticleInfo] = useState({id:'', name:'', title:'', created:'', creater:'', content:[], upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchArticleInfo = async () => {
            const result = await fetch(`/api/articles/${name}`);
            setArticleInfo(await result.json());

        };

        fetchArticleInfo();
    }, [name]);
    
    

    return articleInfo ?
    (
        <>
        <h1>{articleInfo.title}</h1>
        <UpvotesSection upvotes={articleInfo.upvotes} articleName={name} setArticleInfo={setArticleInfo} />
        <p>{articleInfo.creater}</p>
        <p>{articleInfo.created}</p>
        {articleInfo.content.map((paragraph, key) => <p key={key}>{paragraph}</p>)}
        <CommentsList comments={articleInfo.comments} articleName={name} setArticleInfo={setArticleInfo} />

        </>
    ) : (
        <h1>Uh oh, looks like that article doesn't exist</h1>
    );
};

export default ArticlePage;
