import React, { useState } from "react";
import { patchVotes } from "../utils/api";

export default function Voting({ votes, article_id }) {
  const [votechange, setVotechange] = useState(0);

  const handleIncrement = (inc_votes) => {
    setVotechange((currCount) => {
      return currCount + inc_votes;
    });
    patchVotes(article_id, inc_votes).catch(() => {
      setVotechange((currCount) => {
        return currCount - inc_votes;
      });
    });
  };
  return (
    <div className="voting">
      <p>Likes {votes + votechange}</p>
      <div>
        <button disabled={votechange > 0} onClick={() => handleIncrement(1)}>
          +
        </button>
        <button disabled={votechange < 0} onClick={() => handleIncrement(-1)}>
          -
        </button>
      </div>
    </div>
  );
}
