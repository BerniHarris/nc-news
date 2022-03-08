import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getArticle } from "../utils/api";

const Article = () => {
    const { article_id } = useParams();
    const [article, SetArticle] = useState([]);
    const [isLoading, SetIsLoading] = useState(true);
    useEffect(() => {
        getArticle(article_id).then((article) => {
            SetArticle(article);
            SetIsLoading(false)
        })
    }, [])
    if (isLoading) return <h2>loading...</h2>
    return (
        <div className="content">
            <main className="article">
                <h2 className="title">{article.title}</h2>
                <p className="body">{article.body}</p>
            </main>
        </div>
    );
};
export default Article;