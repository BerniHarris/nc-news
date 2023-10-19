import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle, getCommentsByArticle } from "../../utils/api";
import Article from "../../components/Article/Article";
import PostComment from "../../components/PostComment/PostComment";
import CommentCard from "../../components/CommentCard/CommentCard";
import "./ArticlePage.css";

export default function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    if (reload) {
      Promise.all([
        getArticle(article_id),
        getCommentsByArticle(article_id),
      ]).then(([dataArticle, dataComments]) => {
        setArticle(dataArticle);
        setComments(dataComments);
        setIsLoading(false);
        setReload(false);
      });
    }
  }, [article_id, reload]);

  return (
    <>
      {isLoading ? (
        <h2>loading...</h2>
      ) : (
        <div>
          <Article article={article} />
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
