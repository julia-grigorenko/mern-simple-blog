import React from 'react';

const UpvotesSection = ({ upvotes, articleName, setArticleInfo }) => {
    const upvoteArticle = async () => {
        const response = await fetch(`http://localhost:8000/api/articles/${articleName}/upvote`, {
            method: 'post'
        });
        const body = await response.json();
        setArticleInfo(body);
    };

    return (
        <div id="upvotes-section">
            <button onClick={() => {
                upvoteArticle();
            }}>Add Upvote</button>
            <p>This article has {upvotes} upvotes</p>
        </div>
    );
}

export default UpvotesSection;
