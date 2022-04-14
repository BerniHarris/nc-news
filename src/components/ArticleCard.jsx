import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard(article) {
  //article is props
  return (
    <Link to={`/articles/${article.article_id}`} className="article-card">
      <div className="card">
        <Link to={`/topic/${article.topic}`}>
          <p className={`article-${article.topic}`}>{article.topic}</p>
        </Link>
        <Link to={`/articles/${article.article_id}`} className="article-card">
          <p className="card_title">{article.title}</p>
        </Link>
        <div className="create_votes">
          <p className="card_author">By {article.author}</p>
          <p className="card_votes">Votes {article.votes}</p>
        </div>
      </div>
    </Link>
  );
}
