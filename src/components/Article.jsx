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
              {moment(created).format("MMM Do YYYY")}
            </p>
          </div>
          <p className="article-body">{article.body}</p>
          <div className="articlebylikecomment">
            <p className="articleCommentCount">
              <svg
                height="1rem"
                className="card_comments"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 335.37 278.65"
              >
                <path d="M263.48,215.63c0,13.27,0,26.1,0,38.92,0,11.9-8.16,21.89-19.75,23.73-9.17,1.46-17-1.49-23-8.65Q205.85,252.07,191,234.48c-3.78-4.48-7.74-8.82-11.31-13.46-3-3.94-6.84-5.42-11.65-5.41q-66.06.07-132.11,0c-13.7,0-24.09-6.36-31.17-18A33,33,0,0,1,0,180.16Q0,107.74,0,35.33C.05,16.18,15.76.15,34.93.11Q149.08-.08,263.23,0c12.47,0,24.95-.1,37.42.07a35.5,35.5,0,0,1,34.67,35.08q.09,72.6,0,145.21c0,19-16,35-35,35.21C288.22,215.72,276.13,215.63,263.48,215.63ZM239.15,254a10.17,10.17,0,0,0,.37-1.41q0-18.15,0-36.29c0-14.31,10.09-24.53,24.35-24.63,11-.07,21.95,0,32.92,0,10.08,0,14.59-4.54,14.59-14.65V38.56c0-10-4.54-14.55-14.63-14.55H39c-10.68,0-15,4.3-15,14.89V176.21c0,11.13,4.27,15.44,15.3,15.44,43,0,86.06.07,129.08,0,12.33,0,22.17,4.58,29.94,14.09,6,7.34,12.2,14.5,18.33,21.73C224,236.16,231.41,244.88,239.15,254Z" />
              </svg>
              {article.comment_count}
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
