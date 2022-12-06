import React from "react"
import { NavLink } from 'react-router-dom';
import CV from '../../documents/CV_Linan_Camille_2022.pdf';

const Header = () => {
    return (
        <header className="header">
            <div className='header_box'>
                <div className="header_titles">
                    <h1 className="header_titles_title">Liñan Camille</h1>
                    <h2 className="header_titles_subtitle">Développeuse Web</h2>
                </div>
                <div className="header_links">
                    <NavLink
                        className={({ isActive }) => (isActive ? 'header_links_link_home active_link' : 'header_links_link_home')}
                        end to='/'
                    >
                        Accueil
                    </NavLink>
                    <a href={CV} target='_blank' rel='noopener noreferrer' className="header_links_link_CV">
                        CV
                    </a>
                    <a href='mailto:camille.linan@hotmail.com' className="header_links_link_contact">
                        Contact
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;