import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div
      className="background"
      style={{
        backgroundimage: "../src/pics/coop.jpg",
        backgroundposition: "center - 3rem",
        backgroundsize: "cover",
        backgroundrepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="landing-content">
        <>
          <p
            className="landingtext"
            style={{ fontSize: "1.5rem", fontStyle: "italic" }}
          >
            News from
          </p>
          <p className="landing">the Pigeon Loft</p>
          <p className="landingtext">
            NC News shares a selection of random articles delivered by the
            fascinating pigeons of Dave’s Pigeon Loft.
          </p>
          <Link to="/Home">
            <button className="enter">Sounds coo-l!</button>
          </Link>
        </>
      </div>
    </div>
  );
}
