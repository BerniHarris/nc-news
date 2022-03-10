import React, { useState } from "react";
import {patchVotes} from '../utils/api'

export default function Voting ({votes, article_id}) {
    const [votechange, setVotechange] = useState(0);

    const handleIncrement = (inc_votes) => {
      setVotechange((currCount) => {
        return currCount + inc_votes;
    });
    patchVotes(article_id, inc_votes).catch(() => {
      setVotechange((currCount) => {
        return currCount - inc_votes;
    });
  })
};    
        return (
          <div className="voting">
            <button disabled ={votechange > 0} onClick={() => handleIncrement(1)}>+</button>
            <p>Votes {votes + votechange}</p>
            <button disabled ={votechange < 0} onClick={() => handleIncrement(-1)}>-</button>
          </div>
        );
      };