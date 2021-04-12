import React from 'react';
import {Email} from '@material-ui/icons';
import './footer.scss';

export const Footer = () => {
    return (
        <footer className='container'>
            <a href='mailto:pjotr@muuras.nl'>
              <Email className='icon'fontSize='large'/>
            </a>
            <img src='./img/netherlands-flag.jpg' alt='Netherlands' height={30}/>
            <p className='title'>@Muuras 2021</p>
        </footer>
    )
}
