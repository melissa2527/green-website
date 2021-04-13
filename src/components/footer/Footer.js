import React from 'react';
import {Email} from '@material-ui/icons';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './footer.scss';

export const Footer = () => {
    return (
        <footer className='container'>
            <div className='icon-container'>
                <a href='mailto:pjotr@muuras.nl'>
                <Email className='icon'fontSize='large'/>
                </a>
                <a href='https://www.linkedin.com/company/muuras/' target='_blank' rel="noreferrer">
                    <LinkedInIcon className='icon'fontSize='large'/>
                </a>
            </div>
            <p className='title'>@Muuras 2021</p>
        </footer>
    )
}
