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
        <dt>{comment.body}</dt>
        <dt>Author {comment.author}</dt>
        <dt>Votes {comment.votes}</dt>
        <dt>At {moment(created).format("MMM Do YYYY")}</dt>
        <button onClick={handleClick}>Delete Comment</button>
      </dl>
    </div>
  );
}
