import ArticleList from "./ArticleList";

export default function ArticleCard(article) { //article is props
    return (
        <div className="card"> 
            <p className="card_topic" className={`article-${article.topic}`}>{article.topic}</p>
            <p className="card_title">{article.title}</p>
            <p className="card_author">Created by {article.author}</p>
            {/* <p className="card_created">At {article.created_at}</p>  ---- how do I get just date and time?*/}
            <p className="card_votes">Votes {article.votes}</p>
        </div>
    );
} 

// -------Things to look into---------
// how do I reduce the created time to just date rather than a massive list 
// how do I do dinamic colours for tags?
// how do i change the tag to a click?
// How do I change the card so I can click it an it takes you t full article?
//where do I add alt?