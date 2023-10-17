import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../utils/api";
import ArticleCard from "../components/ArticleCard";
import { SortBy } from "../components/SortBy";

export default function ArticleList() {
  const { topic } = useParams();

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState();

  useEffect(() => {
    api.getAllArticles(topic, sort, order).then((res) => {
      setArticles(res);
      setLoading(false);
    });
  }, [topic, sort, order]);

  if (loading) return <div>Loading...</div>;

  const pageHeader = topic
    ? `${
        topic.charAt(0).toUpperCase() + topic.slice(1).toLowerCase()
      }  Articles`
    : "Articles";

  return (
    <div>
      <h1>{pageHeader}</h1>
      <SortBy setSort={setSort} setOrder={setOrder} />
      <div className="cardcontainer">
        {articles.map((article) => {
          return (
            <section key={article.article_id}>
              <ArticleCard
                body={article.body}
                title={article.title}
                topic={article.topic}
                author={article.author}
                created_at={article.created_at}
                votes={article.votes}
                comment_count={article.comment_count}
                article_id={article.article_id}
              />
            </section>
          );
        })}
      </div>
    </div>
  );
}
