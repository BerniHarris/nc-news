import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { getArticle } from "../utils/api";
import Votes from './Votes';

export default function Article() {
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
                <h2 className="article-title">{article.title}</h2>
                <p className="article-body">{article.body}</p>
                <p className="article-card_author">Created by {article.author}</p>
                <Votes article_id={article_id} votes={article.votes} />
            <Link to={`/topic/${article.topic}`}>
                <p className={`article-${article.topic}`}>{article.topic}</p>
            </Link>
            </main>
        </div>
    );
};