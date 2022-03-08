import * as api from "../utils/api" 
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

export default function Menu ({}) {
    const selectors = ["coding", "football", "cooking" ]

    // useEffect(() => {
    //     api.getArticlesByTopic(topic).then((res) => {
    //         setAllArticles(res);
    //         setLoading(false);
    //     });
    // }, []);

    // if (loading) return <div>Loading...</div>;

    return(
      <div>
        {selectors.map((selector) => {
        
            return (
                <Link to={`/topic/${selector}`}>
                <p key = {selector}>
                {selector}
              </p>
                </Link>

            )
        })}
  
      </div>
    )
  }