import React, { useState } from "react";
import { postArticleComment } from "../../utils/api";

export default function PostComment({ setComments, article_id }) {
  const [comment, setComment] = useState("");
  const [err, setErr] = useState(false);

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      username: "happyamy2016",
      body: comment,
    };

    if (newComment.body.length === 0) {
      alert("Don't forget to include a comment!");
    } else {
      setErr(false);
      setComment("");
      postArticleComment(article_id, newComment)
        .catch((err) => {
          setErr(true);
          alert("Somthing went wrong! Please try again");
          setComments((currComments) => {
            currComments.slice(1);
          });
        })
        .then((newResponseComment) => {
          setComments((currComments) => {
            return [newResponseComment, ...currComments];
          });
        });
    }
  };
  return (
    <div className="form-box">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="postlabel">Leave a comment</label>
        </div>
        <textarea
          value={comment}
          onChange={handleChange}
          placeholder="Like this post? Get chirping!"
        />
        <div>
          <button className="submit" type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
