import './index.css';
import {Link} from 'react-router-dom';
import {SlMenu} from 'react-icons/sl';
import {useState} from 'react';
import {IoMdClose} from 'react-icons/io';




const Header = () => {

    const [sidebar, setSidebar] = useState(false);

    const onClickIcon = () => {
        setSidebar(!sidebar);
    }

    return (
        <>
            <nav className='header-section'>
                <img className='header-logo' src='./SSDS Logo.jpg' alt='logo'/>
                <ul className='menu-section'>
                    <li className='menu-items'>
                        <Link to='/' className='link-items'>
                            Home
                        </Link>
                    </li>
                    <li className='menu-items'>
                        <Link to='/about' className='link-items'>
                            About
                        </Link>
                    </li>
                    <li className='menu-items'>
                        <Link to='/contact' className='link-items'>
                            Contact
                        </Link>
                    </li>
                </ul>
                <button type='button' className='burger-btn' onClick={onClickIcon}>
                    <SlMenu className='burger-icon'/>
                </button>

            </nav>
            {/* sidebar item  */}
            <ul className={sidebar ? 'sidebar-menu' : 'sidebar-menu inactive'} onClick={onClickIcon}>
                <li className='cross-item'>
                    <button type='button' className='burger-btn'>
                        <IoMdClose className='close-icon'/>
                    </button>
                </li>
                <Link to='/' className='sidebar-link-items'>
                    <li className='sidebar-menu-items'>
                            Home
                    </li>
                </Link>
                <Link to='/about' className='sidebar-link-items'>
                    <li className='sidebar-menu-items'>
                            About
                    </li>
                </Link>
                <Link to='/contact' className='sidebar-link-items'>
                    <li className='sidebar-menu-items'>
                            Contact
                    </li>
                </Link>
            </ul>
        </>
    )
}

export default Header