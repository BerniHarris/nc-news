import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard(article) {
  //article is props
  return (
    <div className={`${article.topic}-card`}>
      <div>
        <div className="card_topic">
          <Link to={`/topic/${article.topic}`}>
            <p className={`article-${article.topic}`}>
              {article.topic.toUpperCase()}
            </p>
          </Link>
        </div>
        <Link to={`/articles/${article.article_id}`} className="article-card">
          <p className="card_title">{article.title.toUpperCase()}</p>
        </Link>
      </div>
      <div className="bylikecomment">
        <p className="card_author">By {article.author}</p>
        <p className="card_votes">Likes {article.votes}</p>
        <p className="card_comments">Comments {article.comment_count}</p>
      </div>
    </div>
  );
}
