import React, { useState, useEffect } from "react";
import {patchVotes} from '../utils/api'

export default function Voting (props) {
    const [votes, setVotes] = useState(props.votes);

    useEffect(() => {
        patchVotes().then((voteCount) => {
        setVotes(voteCount);
        });
    }, []);
        
    const handleUpVote = () => {
        setVotes((currCount) => currCount + 1);
    };
          
    const handleDownVote = () => {
        setVotes((currCount) => currCount - 1);
    };
          
        return (
          <div className="voting">
            <p>Votes {votes}</p>
            <button onClick={handleDownVote}>-</button>
            <button onClick={handleUpVote}>+</button>
          </div>
        );
      };