import React, {useState} from 'react'
import { postArticleComment } from '../utils/api'

export default function PostComment({setComments, article_id}) {
    const [comment, setComment] = useState("")
    const [err, setErr] = useState(false);

    const handleChange = (event) => {
        setComment(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newComment = {
            username: "happyamy2016",
            body: comment
            
    };
    setErr(false);
    setComment("");
    postArticleComment(article_id, newComment).catch((err) => {
        setErr(true);
        // alert("Somthing went wrong! Please try again");
        setComments((currComments) => {
            return currComments.slice(1);
        })
    })
    .then((newResponseComment) => {
        setComments((currComments) => {
            return [newResponseComment, ...currComments];
        });
    })
    
}
return (
    <div>
        <form onSubmit={handleSubmit}>
            <label> Add comment 
            <input value={comment} onChange={handleChange}/>
            </label>
                <button type="submit">Submit</button>
            </form>
    </div>
)
}

// {username: newComment.author, body: newComment.body}

