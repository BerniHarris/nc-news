import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticle, getCommentsByArticle } from "../utils/api";
import Votes from "./Votes";
import PostComment from "./PostComment";
import CommentCard from "./CommentCard";

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

  if (isLoading) return <h2>loading...</h2>;
  return (
    <div>
      <div className="article-box">
        <section className="article">
          <h2 className="article-title">{article.title}</h2>
          <p className="article-body">{article.body}</p>
          <p className="article-card_author">Created by {article.author}</p>
          <Votes
            className="vote"
            article_id={article_id}
            votes={article.votes}
          />
          <Link to={`/topic/${article.topic}`}>
            <p className={`article-${article.topic}`}>{article.topic}</p>
          </Link>
        </section>
      </div>
      <PostComment setComments={setComments} article_id={article_id} />
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
