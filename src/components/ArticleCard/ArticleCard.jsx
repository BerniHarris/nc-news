import React from "react";
import { Link } from "react-router-dom";
import like from "../../pics/like.svg";
import comment from "../../pics/comment.svg";
import "./ArticleCard.css";

export default function ArticleCard(props) {
  const { article_id, topic, author, title, comment_count, votes } =
    props.article;

  return (
    <div className={`${topic}-card `}>
      <div>
        <div className="card_topic">
          <Link to={`/topic/${topic}`}>
            <p className={`article-${topic}`}>{topic.toUpperCase()}</p>
          </Link>
        </div>
        <Link to={`/articles/${article_id}`} className="article-card">
          <p className="card_title">{title.toUpperCase()}</p>
        </Link>
      </div>
      <div className="bylikecomment">
        <p className="card_author">By {author}</p>
        <p>
          <img src={like} className="card_votes" alt="vote icon" />
          {votes}
        </p>
        <p className="card_comments">
          <img src={comment} className="card_comments" alt="comment icon" />
          {comment_count}
        </p>
      </div>
    </div>
  );
}
