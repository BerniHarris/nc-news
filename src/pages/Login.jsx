import avatar from "../pics/profileicon.png";

export default function Login() {
  return (
    <ul>
      <img
        src={avatar}
        className="pigeonprofie"
        alt="pigeons take on masic profile icons"
      />
      <p>You are logged in as happyamy2016</p>
    </ul>
  );
}
