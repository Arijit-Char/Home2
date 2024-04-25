import { useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import { tony } from './utils';
import { Link } from 'react-scroll';

const Header = ({ about, isTransparent, headerColor }) => {
    useEffect(() => {
        tony.stickyNav();
        tony.scrollToActiveNav();
    }, []);

    return (
        <header>
            <Accordion>
                <nav
                    className={`navbar header-nav header-${
                        headerColor ? headerColor : 'white'
                    } ${isTransparent ? 'header-transparent' : ''} navbar-expand-lg`}
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
                                        className="nav-link active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        hashSpy={true}
                                        offset={50}
                                        duration={250}
                                        delay={500}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        hashSpy={true}
                                        offset={50}
                                        duration={250}
                                        delay={500}
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link"
                                        to="services"
                                        spy={true}
                                        smooth={true}
                                        hashSpy={true}
                                        offset={50}
                                        duration={250}
                                        delay={500}
                                    >
                                        services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link"
                                        to="work"
                                        spy={true}
                                        smooth={true}
                                        hashSpy={true}
                                        offset={50}
                                        duration={250}
                                        delay={500}
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link"
                                        to="blog"
                                        spy={true}
                                        smooth={true}
                                        hashSpy={true}
                                        offset={50}
                                        duration={250}
                                        delay={500}
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link"
                                        to="contactus"
                                        spy={true}
                                        smooth={true}
                                        hashSpy={true}
                                        offset={50}
                                        duration={250}
                                        delay={500}
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
