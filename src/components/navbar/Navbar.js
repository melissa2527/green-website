import React, {useState, useEffect} from 'react';
import './navbar.scss';
import {Link} from 'react-router-dom';

export const NavBar = () => {
    const [clicked, setClicked] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {setClicked(!clicked)};
    const closeMenuMobile = () => setClicked(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMenuMobile}>
                        <img src='img/muuras.png' alt='' height={50}/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link' onClick={closeMenuMobile}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/what-we-do' className='nav-link' onClick={closeMenuMobile}>
                                What We Do
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/team' className='nav-link' onClick={closeMenuMobile}>
                                Our Team
                            </Link>
                        </li>
                    </ul>
                    {button ? <button>
                        <Link to='/contact' className='contact-btn'>
                            Contact
                        </Link>
                    </button> : null}
                </div>
            </nav>
        </>
    )
}
