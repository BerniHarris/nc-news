import React from "react";
import moment from "moment";
import { deleteArticleComment, getCommentsByArticle } from "../utils/api";

export default function CommentCard(comment) {
  const handleClick = () => {
    deleteArticleComment(comment.comment_id).then(() => {
      getCommentsByArticle(comment.article_id).then((receivedData) => {
        return comment.setComments(receivedData);
      });
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
          <dt>Likes {comment.votes}</dt>
          <button onClick={handleClick}>Delete Comment</button>
        </div>
      </dl>
    </div>
  );
}
