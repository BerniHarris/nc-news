import {useEffect, useState} from "react"
import { useParams, Link } from "react-router-dom"
import * as api from '../utils/api'
import ArticleCard from "./ArticleCard"

export default function ArticleList() {

    const {topic} = useParams()

    const [allArticles, setAllArticles] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.getAllArticles(topic).then((res) => {
            setAllArticles(res);
            setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;
    
    return (
        <div>
            <h1>Articles</h1>
            <div className="cardcontainer">
                {allArticles.map((article) => {
                    return (
                        <section key={article.article_id}>
                            
                            <Link to={`/topic/${article.topic}`}>
                            <p>{article.topic}</p>
                            </Link>

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
};