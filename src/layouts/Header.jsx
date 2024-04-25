import { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { tony } from './utils';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = ({ about, isTransparent, headerColor }) => {
    const [activeNav, setActiveNav] = useState('home'); // State to track active navigation link

    useEffect(() => {
        tony.stickyNav();
        tony.scrollToActiveNav();
    }, []);

    const handleSetActive = (to) => {
        setActiveNav(to); // Update active navigation link
    };

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
                                        className={`nav-link${activeNav === 'home' ? ' active' : ''}`}
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        hashSpy={true}
                                        offset={50}
                                        duration={250}
                                        delay={500}
                                        onSetActive={handleSetActive}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`nav-link${activeNav === 'about' ? ' active' : ''}`}
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        hashSpy={true}
                                        offset={50}
                                        duration={250}
                                        delay={500}
                                        onSetActive={handleSetActive}
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`nav-link${activeNav === 'services' ? ' active' : ''}`}
                                        to="services"
                                        spy={true}
                                        smooth={true}
                                        hashSpy={true}
                                        offset={50}
                                        duration={250}
                                        delay={500}
                                        onSetActive={handleSetActive}
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`nav-link${activeNav === 'work' ? ' active' : ''}`}
                                        to="work"
                                        spy={true}
                                        smooth={true}
                                        hashSpy={true}
                                        offset={50}
                                        duration={250}
                                        delay={500}
                                        onSetActive={handleSetActive}
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`nav-link${activeNav === 'blog' ? ' active' : ''}`}
                                        to="blog"
                                        spy={true}
                                        smooth={true}
                                        hashSpy={true}
                                        offset={50}
                                        duration={250}
                                        delay={500}
                                        onSetActive={handleSetActive}
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`nav-link${activeNav === 'contactus' ? ' active' : ''}`}
                                        to="contactus"
                                        spy={true}
                                        smooth={true}
                                        hashSpy={true}
                                        offset={50}
                                        duration={250}
                                        delay={500}
                                        onSetActive={handleSetActive}
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
