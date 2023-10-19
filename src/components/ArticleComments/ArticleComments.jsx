import CommentCard from "../../components/CommentCard/CommentCard";
import React, { useState, useEffect } from "react";
import { getCommentsByArticle } from "../../utils/api";

export default function ArticleComments(props) {
  const [comments, setComments] = useState([]);
  const [reload, setReload] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (reload) {
      getCommentsByArticle(props.articleId).then((comments) => {
        setComments(comments);
        setIsLoading(false);
        setReload(false);
      });
    }
  }, [props, reload]);

  return (
    <div>
      {isLoading ? (
        <h2>loading...</h2>
      ) : (
        <div>
          <h3>Comments:</h3>
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} {...comment} />;
          })}
        </div>
      )}
    </div>
  );
}
