import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard(article) {
  // ------ added as wanted long cards on a big screen but to fit on small. Flex box alone wasn't looking consistent in sizes ------
  let articleWidth = window.innerWidth;
  if (articleWidth <= 400) {
    articleWidth = 240;
  } else if (articleWidth > 400) {
    articleWidth = 500;
  }

  let articleHeight = window.innerWidth;
  if (articleHeight <= 400) {
    articleHeight = 300;
  } else if (articleHeight > 400) {
    articleHeight = 200;
  }

  return (
    <div
      className={`${article.topic}-card`}
      style={{ width: `${articleWidth}px`, height: `${articleHeight}px` }}
    >
      <div>
        <div className="card_topic">
          <Link to={`/topic/${article.topic}`}>
            <p className={`article-${article.topic}`}>
              {article.topic.toUpperCase()}
            </p>
          </Link>
        </div>
        <Link to={`/articles/${article.article_id}`} className="article-card">
          <p className="card_title">{article.title.toUpperCase()}</p>
        </Link>
      </div>
      <div className="bylikecomment">
        <p className="card_author">By {article.author}</p>
        <p>
          <svg
            className="card_votes"
            height="1rem"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 341.48 283.97"
          >
            <path d="M170.91,284a19.71,19.71,0,0,1-10.08-2.89c-35.16-20.75-65.06-42.25-91.38-65.73-20.26-18.06-35.08-34.54-46.67-51.85-12.25-18.31-19.11-34.83-21.58-52C1,110,.77,108.45.55,106.92l-.41-3a14.71,14.71,0,0,1-.14-2v-5.5a14.4,14.4,0,0,1,.23-2.55l.18-1c.15-.86.3-1.73.46-2.59.33-1.74.62-3.65.9-5.49l0-.12A100.78,100.78,0,0,1,4.93,69.48,98.21,98.21,0,0,1,39.84,20,97.32,97.32,0,0,1,97,.12l2.27,0c28.57,0,52.64,10.05,71.7,29.91A99.52,99.52,0,0,1,335.06,64.25a97.39,97.39,0,0,1-2.26,74.93c-9.81,21.9-24.52,42-46.28,63.41-28.49,28-63,53.64-105.49,78.49A19.9,19.9,0,0,1,170.91,284Zm1.2-21.79h0ZM22,101.42l.34,2.46c.21,1.5.42,3,.64,4.49,2,13.79,7.73,27.42,18.09,42.9,10.52,15.72,24.19,30.87,43,47.67,25,22.27,53.4,42.74,86.85,62.55,40.44-23.73,73.21-48.14,100.17-74.6,19.73-19.37,33-37.39,41.62-56.7a75.61,75.61,0,0,0,1.77-58.12A77.84,77.84,0,0,0,223,24.33a77.88,77.88,0,0,0-43.19,29.15A11,11,0,0,1,171,57.93h-.06a11,11,0,0,1-8.76-4.35C146.07,32.4,125.48,22.1,99.22,22.1l-1.84,0a75.53,75.53,0,0,0-44.3,15.4A76.49,76.49,0,0,0,25.93,76,83,83,0,0,0,23.53,88v.12c-.31,2-.63,4.09-1,6.18-.15.79-.29,1.59-.43,2.39l-.08.45Zm-.07-.52h0Zm0-3.21v0A.06.06,0,0,1,21.9,97.69Z" />
          </svg>
          {article.votes}
        </p>

        <p className="card_comments">
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
      </div>
    </div>
  );
}
