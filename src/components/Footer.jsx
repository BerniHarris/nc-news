import {Link} from 'react-router-dom'
import github from '../pics/github.png'

export default function Footer() {
    return <footer className='pagefooter'> 
    <p>A project by Berni Harris <br/>
    <Link to="/Home"> {/*<---- change link to github */}
            <img src={github} className="githublogo" alt="github cat logo" /> {/*<---change color with hover*/}
    </Link><br/>
    Created as part of my coding bootcamp at<br/>
    Northcoders {/*<----logo in here!*/}
    </p>
    </footer> 
}

{/*------tweak to get footer to stick at bottom of page--------*/}