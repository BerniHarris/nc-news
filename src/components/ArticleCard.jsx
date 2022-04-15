import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard(article) {
  //article is props
  return (
    <div className="card">
      <Link to={`/topic/${article.topic}`}>
        <p className={`article-${article.topic}`}>{article.topic}</p>
      </Link>
      <Link to={`/articles/${article.article_id}`} className="article-card">
        <p className="card_title">{article.title}</p>
      </Link>
      <p className="card_author">Created by {article.author}</p>
      <p className="card_votes">Votes {article.votes}</p>
      <p className="card_votes">Comments {article.comment_count}</p>
    </div>
  );
}
