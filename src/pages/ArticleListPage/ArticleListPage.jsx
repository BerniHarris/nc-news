import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SortBy } from "../../components/SortBy/SortBy";
import * as api from "../../utils/api";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

export default function ArticleListPage() {
  const { topic } = useParams();

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState();

  useEffect(() => {
    api.getAllArticles(topic, sort, order).then((data) => {
      setArticles(data);
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
              <ArticleCard article={article} />
            </section>
          );
        })}
      </div>
    </div>
  );
}
