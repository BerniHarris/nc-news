import React from "react";

export default function CommentCard(comment) {
    console.log(comment)
    return (
        <div>
            <main className='individual-comment-box'>
            <p>{comment.body}</p>  
            <p>Author {comment.author}</p>   
            <p>Votes {comment.votes}</p>  
            </main>           
        </div>
    )};
