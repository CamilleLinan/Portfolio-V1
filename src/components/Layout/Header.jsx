import { Link, NavLink } from 'react-router-dom';

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
                        className={({ isActive }) => (isActive ? 'header_links_link_home active_link' : 'header_links_link_home inactive_link')}
                        end to='/'
                    >
                        Accueil
                    </NavLink>
                    <Link
                        className="header_links_link_contact" 
                        to='#'
                        onClick={(e) => {
                            window.location.href = 'mailto:camille.linan@hotmail.com';
                            e.preventDefault();
                        }}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;