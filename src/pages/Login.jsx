import avatar from '../pics/profileicon.png'

export default function Login() {
    return <ul>
                <img src={avatar} className="pigeonprofie" alt="pigeons take on masic profile icons"/>
        <li>avatar</li>
        <li>username</li>
        <li>password</li>
        <button>submit</button>
    </ul>
}