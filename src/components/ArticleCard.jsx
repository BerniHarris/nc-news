import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard(article) { //article is props
    return (
        <div className="card"> 
        <Link to={`/articles/${article.article_id}`} className="article-card" >
            <p className="card_topic" className={`article-${article.topic}`}>{article.topic}</p>
            <p className="card_title">{article.title}</p>
            <p className="card_author">Created by {article.author}</p>
            <p className="card_votes">Votes {article.votes}</p>
            </Link>
        </div>
    );
} 