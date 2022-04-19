/* eslint-disable no-empty-pattern */
import { Link } from "react-router-dom";

export default function Menu({}) {
  const selectors = ["coding", "football", "cooking"];
  return (
    <div>
      <h1>Menu</h1>
      {selectors.map((selector) => {
        return (
          <Link to={`/topic/${selector}`}>
            <p key={selector}>{selector}</p>
          </Link>
        );
      })}
    </div>
  );
}
