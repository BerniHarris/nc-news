import github from "../../pics/github.png";

export default function Footer() {
  return (
    <footer className="pagefooter">
      <p>
        A project by Berni Harris <br />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/BerniHarris"
        >
          <img src={github} className="githublogo" alt="github cat logo" />
        </a>
        <br />
        Created as part of my coding bootcamp at Northcoders.
        <br />
      </p>
    </footer>
  );
}
