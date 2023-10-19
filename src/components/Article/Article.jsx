import { useState } from "react";
import { Link } from "react-router-dom";
import { patchVotes } from "../../utils/api";

import Voting from "../Voting/Voting";
import moment from "moment";
import comment from "../../pics/comment.svg";

export default function Article(props) {
  const {
    article_id,
    topic,
    author,
    title,
    created_at,
    body,
    comment_count,
    votes,
  } = props.article;
  const [voteChange, setVoteChange] = useState(0);
  const [voteCount, setVoteCount] = useState(votes);

  const upVote = () => {
    patchVotes(article_id, 1);
    setVoteChange(voteChange + 1);
    setVoteCount(voteCount + 1);
  };

  const downVote = () => {
    patchVotes(article_id, -1);
    setVoteChange(voteChange - 1);
    setVoteCount(voteCount - 1);
  };

  return (
    <div className="article-box">
      <section className="article">
        <div className="card_topic">
          <Link to={`/topic/${topic}`}>
            <p className={`article-${topic}`}>{topic.toUpperCase()}</p>
          </Link>
        </div>
        <h2 className="card_title">{title.toUpperCase()}</h2>
        <div className="timeandby">
          <p className="card_author">By {author}</p>
          <p className="article_time">
            {moment(created_at).format("MMM Do YYYY")}
          </p>
        </div>
        <p className="article-body">{body}</p>
        <div className="articlebylikecomment">
          <p className="articleCommentCount">
            <img
              src={comment}
              className="card_comments"
              alt="speech bubble icon"
            />
            {comment_count}
          </p>
          <Voting
            className="vote"
            article_id={article_id}
            votes={voteCount}
            upVote={upVote}
            downVote={downVote}
            voteChange={voteChange}
          />
        </div>
      </section>
    </div>
  );
}
