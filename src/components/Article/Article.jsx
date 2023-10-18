import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticle, getCommentsByArticle, patchVotes } from "../../utils/api";
import PostComment from "../PostComment/PostComment";
import CommentCard from "../CommentCard/CommentCard";
import Voting from "../Voting/Voting";
import moment from "moment";
import comment from "../../pics/comment.svg";
import "./Article.css";

export default function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [reload, setReload] = useState(true);
  const [votes, setVotes] = useState(0);
  const [voteChange, setVoteChange] = useState(0);

  useEffect(() => {
    if (reload) {
      Promise.all([
        getArticle(article_id),
        getCommentsByArticle(article_id),
      ]).then(([dataArticle, dataComments]) => {
        setVotes(dataArticle.votes);
        setArticle(dataArticle);
        setComments(dataComments);
        setIsLoading(false);
        setReload(false);
      });
    }
  }, [article_id, reload]);

  const upVote = () => {
    patchVotes(article_id, 1);
    setVotes(votes + 1);
    setVoteChange(voteChange + 1);
  };

  const downVote = () => {
    patchVotes(article_id, -1);
    setVotes(votes - 1);
    setVoteChange(voteChange - 1);
  };

  return (
    <>
      {isLoading ? (
        <h2>loading...</h2>
      ) : (
        <div>
          <div className="article-box">
            <section className="article">
              <div className="card_topic">
                <Link to={`/topic/${article.topic}`}>
                  <p className={`article-${article.topic}`}>
                    {article.topic.toUpperCase()}
                  </p>
                </Link>
              </div>
              <h2 className="card_title">{article.title.toUpperCase()}</h2>
              <div className="timeandby">
                <p className="card_author">By {article.author}</p>
                <p className="article_time">
                  {moment(article.created_at).format("MMM Do YYYY")}
                </p>
              </div>
              <p className="article-body">{article.body}</p>
              <div className="articlebylikecomment">
                <p className="articleCommentCount">
                  <img
                    src={comment}
                    className="card_comments"
                    alt="speech bubble icon"
                  />
                  {article.comment_count}
                </p>
                <Voting
                  className="vote"
                  article_id={article_id}
                  votes={votes}
                  upVote={upVote}
                  downVote={downVote}
                  voteChange={voteChange}
                />
              </div>
            </section>
          </div>
          <PostComment setComments={setComments} article_id={article_id} />
          <div>
            <div>
              <h3>Comments:</h3>
              {comments.map((comment) => {
                return <CommentCard key={comment.comment_id} {...comment} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
