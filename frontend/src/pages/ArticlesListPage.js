import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';

const ArticlesListPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
      const fetchArticles = async () => {
          const result = await fetch(`http://localhost:8000/api/articles/`);
          setArticles(await result.json());

      };

      fetchArticles();
  }, []);

  return (
    <>
    <h1>Articles</h1>
    <ArticlesList articles={articles} />
    </>
);}

export default ArticlesListPage;
