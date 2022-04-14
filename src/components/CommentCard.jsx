import React from "react";

export default function CommentCard(props) {
    return (
        <div>
            <dl className='individual-comment-box'>
            <dt>{props.body}</dt>  
            <dt>Author {props.author}</dt>    
            <dt>Votes {props.votes}</dt> 
            </dl>           
        </div>
    )};
