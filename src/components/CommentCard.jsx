import React from "react";
import moment from "moment";

export default function CommentCard(props) {
  let created = props.created_at;
  return (
    <div>
      <dl className="individual-comment-box">
        <dt>{props.body}</dt>
        <dt>Author {props.author}</dt>
        <dt>Votes {props.votes}</dt>
        <dt>At {moment(created).format("MMM Do YYYY")}</dt>
      </dl>
    </div>
  );
}
