import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticle, getCommentsByArticle } from "../utils/api";
import Votes from "./Votes";
import PostComment from "./PostComment";
import CommentCard from "./CommentCard";
import moment from "moment";

export default function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticle(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id, comments]);

  useEffect(() => {
    getCommentsByArticle(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);

  let created = article.created_at;

  if (isLoading) return <h2>loading...</h2>;
  return (
    <div>
      <div className="article-box">
        <section className="article">
          <div className="card_topic">
            <p className={`article-${article.topic}`}>
              {article.topic.toUpperCase()}
            </p>
          </div>
          <h2 className="card_title">{article.title.toUpperCase()}</h2>
          <div className="timeandby">
            <p className="card_author">By {article.author}</p>
            <p className="article_time">
              {moment(created).format("MMM Do YYYY")}
            </p>
          </div>
          <Link to={`/topic/${article.topic}`}></Link>
          <p className="article-body">{article.body}</p>
          <div className="articlebylikecomment">
            <p className={`article-${article.comment_count}`}>
              Comments {article.comment_count}
            </p>
            <Votes
              className="vote"
              article_id={article_id}
              votes={article.votes}
            />
          </div>
        </section>
        <PostComment setComments={setComments} article_id={article_id} />
      </div>
      {/* -----comments------ */}

      <h3>Comments:</h3>
      <div>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} {...comment} />;
        })}
      </div>
    </div>
  );
}
