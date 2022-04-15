import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import { SortBy } from "./SortBy";
import pidge from "../pics/post.png";

export default function ArticleList() {
  const { topic } = useParams();

  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState();

  useEffect(() => {
    api.getAllArticles(topic, sort, order).then((res) => {
      setAllArticles(res);
      setLoading(false);
    });
  }, [topic, sort, order]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <img src={pidge} height={150} />
      <h1>{topic} Scrolls</h1>
      <SortBy setSort={setSort} setOrder={setOrder} />
      <div className="cardcontainer">
        {allArticles.map(
          ({
            article_id,
            title,
            body,
            topic,
            comment_count,
            author,
            created_at,
            votes,
          }) => {
            return (
              <section key={article_id}>
                <ArticleCard
                  body={body}
                  title={title}
                  topic={topic}
                  author={author}
                  created_at={created_at}
                  votes={votes}
                  comment_count={comment_count}
                  article_id={article_id}
                />
              </section>
            );
          }
        )}
      </div>
    </div>
  );
}
