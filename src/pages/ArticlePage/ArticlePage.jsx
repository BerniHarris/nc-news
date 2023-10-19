import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../../utils/api";
import Article from "../../components/Article/Article";
import PostComment from "../../components/PostComment/PostComment";
import ArticleComments from "../../components/ArticleComments/ArticleComments";
import "./ArticlePage.css";

export default function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    if (reload) {
      getArticle(article_id).then((article) => {
        setArticle(article);
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
          <PostComment article_id={article_id} />
          <ArticleComments articleId={article_id} />
        </div>
      )}
    </>
  );
}
