import { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { tony } from './utils';
import { Link } from 'react-scroll';

const Header = ({ about, isTransparent, headerColor }) => {
    const [activeLink, setActiveLink] = useState('home1');

    useEffect(() => {
        tony.stickyNav();
        tony.scrollToActiveNav();
    }, []);

  

    return (
        <header>
            <Accordion>
                <nav
                    className={`navbar header-nav header-${headerColor ? headerColor : 'white'} ${
                        isTransparent ? 'header-transparent' : ''
                    } navbar-expand-lg`}
                >
                    <div className="container">
                        {/* Brand */}
                        <a className="navbar-brand" href="index.html">
                            {about.name} <span className="theme-bg" />
                        </a>
                        {/* / */}
                        {/* Mobile Toggle */}
                        <Accordion.Toggle as="button" className="navbar-toggler" type="button" eventKey="toggle">
                            <span />
                            <span />
                            <span />
                        </Accordion.Toggle>
                        {/* / */}
                        {/* Top Menu */}
                        <Accordion.Collapse eventKey="toggle" className="navbar-collapse justify-content-end" id="navbar-collapse-toggle">
                            <ul className="navbar-nav ml-auto nav-ul">
                                <li>
                                    <Link
                                        className={`nav-link ${activeLink === 'home1' ? 'active' : ''}`}
                                        to="home1"
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        onClick={() => setActiveLink('home1')}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                         className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                                         to="about"
                                         spy={true}
                                         smooth={true}
                                         offset={50}
                                         duration={500}
                                         onClick={() => setActiveLink('about')}
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`nav-link ${activeLink === 'services' ? 'active' : ''}`}
                                        to="services"
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        onClick={() => setActiveLink('services')}
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`nav-link ${activeLink === 'work' ? 'active' : ''}`}
                                        to="work"
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        onClick={() => setActiveLink('work')}
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                         className={`nav-link ${activeLink === 'blog' ? 'active' : ''}`}
                                         to="blog"
                                         spy={true}
                                         smooth={true}
                                         offset={50}
                                         duration={500}
                                         onClick={() => setActiveLink('blog')}
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                          className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
                                          to="contactus"
                                          spy={true}
                                          smooth={true}
                                          offset={50}
                                          duration={500}
                                          onClick={() => setActiveLink('contact')}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </Accordion.Collapse>
                        {/* / */}
                    </div>
                    {/* Container */}
                </nav>{' '}
                {/* Navbar */}
            </Accordion>
        </header>
    );
};
export default Header;
