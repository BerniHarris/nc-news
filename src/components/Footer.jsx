import {Link} from 'react-router-dom'
import github from '../pics/github.png'

export default function Footer() {
    return <footer className='pagefooter'> 
    <p>A project by Berni Harris <br/>
    <Link to="/Home"> {/*<---- change link to github */}
            <img src={github} className="githublogo" alt="github cat logo" />
    </Link><br/>
    Created as part of my coding bootcamp at<br/>
    </p>
    </footer> 
}
