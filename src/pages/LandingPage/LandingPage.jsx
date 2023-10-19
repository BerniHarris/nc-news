import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="background">
      <div className="landing-content">
        <p className="landingtext">News from</p>
        <p className="landing">the Pigeon Loft</p>
        <p className="landingtext">
          NC News shares an exclusive selection of articles delivered by the
          fascinating pigeons of Dave’s Pigeon Loft.
        </p>
        <Link to="/Home">
          <button className="enter">Sounds coo-l!</button>
        </Link>
      </div>
    </div>
  );
}
