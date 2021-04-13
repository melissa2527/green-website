import React, {useState, useEffect} from 'react';
import './navbar.scss';
import {Link} from 'react-router-dom';
import {Button} from '../Button';
import {useTranslation} from 'react-i18next';
// import i18n from '../../i18next';

export const NavBar = () => {
    const [clicked, setClicked] = useState(false);
    const [button, setButton] = useState(true);
    const [langEnglish, setEnglish] = useState(true);

    const handleClick = () => {setClicked(!clicked)};
    const closeMenuMobile = () => setClicked(false);

    const {t, i18n} = useTranslation();

    const setLanguage = (lang) => {
        i18n.changeLanguage(lang)
        setEnglish(!langEnglish)
    }

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
                    <div className='logo-container'>
                        <Link to='/' className='navbar-logo' onClick={closeMenuMobile}>
                            <img src='img/muuras.png' alt='' height={50}/>
                        </Link>
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        <i id='bars-hover' className={clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                            <Link to='/' className='nav-link' onClick={closeMenuMobile}>
                                {/* Home */}
                                {t("Navbar.1")}
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/what-we-do' className='nav-link' onClick={closeMenuMobile}>
                            {t("Navbar.3")}
                            {/* What We Do */}
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/team' className='nav-link' onClick={closeMenuMobile}>
                            {t("Navbar.2")}
                            {/* Our Team */}
                            </Link>
                        </li>
                        {(window.innerWidth <= 960) ? 
                        <li className='nav-item'>
                        <Link to='/contact' className='nav-link' onClick={closeMenuMobile}>
                        {t("Navbar.4")}
                        {/* Our Team */}
                        </Link>
                        </li>:null
                    }
                    </ul>

                    {langEnglish && <img className='flag' src='./img/netherlands-flag.jpg' alt='dutch' onClick={() => setLanguage('nl')}/>}
                     {!langEnglish && <img className='flag' src='./img/uk-flag.jpg' alt='english' onClick={() => setLanguage('en')}/>
                    }
                   
                   
                    {button && <Button buttonStyle='btn--primary'>
                        <Link to='/contact' className='contact-btn'>
                        {t("Navbar.4")}
                        {/* Contact */}
                        </Link>
                    </Button>}
                </div>
            </nav>
        </>
    )
}
