import React from "react";
import { Link } from "react-router-dom";
import like from "../pics/like.svg";
import comment from "../pics/comment.svg";
import "./ArticleCard.css";

export default function ArticleCard(article) {
  // ------ added as wanted long cards on a big screen but to fit on small. Flex box alone wasn't looking consistent in sizes ------
  let articleWidth = window.innerWidth;
  if (articleWidth <= 400) {
    articleWidth = 240;
  } else if (articleWidth > 400) {
    articleWidth = 500;
  }

  let articleHeight = window.innerWidth;
  if (articleHeight <= 400) {
    articleHeight = 300;
  } else if (articleHeight > 400) {
    articleHeight = 200;
  }

  return (
    <div
      className={`${article.topic}-card`}
      style={{ width: `${articleWidth}px`, height: `${articleHeight}px` }}
    >
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
        <p>
          <img src={like} className="card_votes" alt="vote icon" />
          {article.votes}
        </p>
        <p className="card_comments">
          <img src={comment} className="card_comments" alt="comment icon" />
          {article.comment_count}
        </p>
      </div>
    </div>
  );
}
