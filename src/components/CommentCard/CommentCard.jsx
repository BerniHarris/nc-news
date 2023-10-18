import React from "react";
import moment from "moment";
import bin from "../../pics/bin.svg";

import { deleteArticleComment } from "../../utils/api";

export default function CommentCard(comment) {
  const handleClick = () => {
    deleteArticleComment(comment.comment_id).then(() => {
      alert("Comment deleted!");
    });
  };

  let created = comment.created_at;

  return (
    <div>
      <dl className="individual-comment-box">
        <div className="timeandby2">
          <dt className="card_author">By {comment.author}</dt>
          <dt className="article_time">
            {moment(created).format("MMM Do YYYY")}
          </dt>
        </div>
        <dt className="comment_body">{comment.body}</dt>
        <div className="likeanddelete">
          <dt>Votes {comment.votes}</dt>
          <img
            src={bin}
            onClick={handleClick}
            className="bin"
            alt="a bin icon"
          />
        </div>
      </dl>
    </div>
  );
}
