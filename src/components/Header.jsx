import {Link} from 'react-router-dom'
//imported pics
import addarticleicon from '../pics/addarticleicon.png';
import menuicon from '../pics/menuicon.png';
import logo from '../pics/logo.png';
import profileicon from '../pics/profileicon.png';

export default function Header() {
    return <header className="header">
        {/*  ---- left side ---- */}
        <div className='leftside'>
                <Link to="/Menu">
                <img src={menuicon} className="menu" alt="menu" />
                </Link>
                <Link to="/Home">
                <img src={logo} className="logo" alt="logo" />
                </Link>
        </div>       
        {/*  ---- right side ---- */}
        <div className='rightside'>
            <Link to="/AddArticle">
            <img src={addarticleicon} className="addarticle" alt="icon of a pen writing on paper" />
            </Link>
            <Link to="/Login">
            <img src={profileicon} className="profileicon" alt="icon of a profile using a pigeon sillohette instead of person" />
            </Link>
        </div>
        </header>
}