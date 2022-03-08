import {useEffect, useState} from "react"
import * as api from '../utils/api'
import ArticleCard from "./ArticleCard"

export default function ArticleList() {
    const [allArticles, setAllArticles] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.getAllArticles().then((res) => {
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
                        <ArticleCard 
                        key={article.article_id}
                        body={article.body}      
                        title={article.title}
                        topic={article.topic}
                        author={article.author}
                        created_at={article.created_at}
                        votes={article.votes}
                        comment_count={article.comment_count}
                        /> 
                        );
                    })}
                    </div>
            </div>
    );
};