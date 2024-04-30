import { Link } from 'react-scroll';
const About = ({ about, social }) => {
    return (
        <section id="about" className="section gray-bg">
            <div className="container" style={{ width: '80%' }}>
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">ABOUT ME</h3>
                            <p className="text-uppercase small">
                                A {about.title} based in {about.address}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-5 m-15px-tb">
                        <div className="about-me-img box-shadow">
                            <img src={about.avatar.url} alt="image" />
                            <div className="nav social-icon">
                                <a href={social[3].url}>
                                    <i className="fab fa-facebook-f" />{' '}
                                </a>
                                <a href={social[2].url}>
                                    <i className="fab fa-twitter" />{' '}
                                </a>
                                <a href={social[0].url}>
                                    <i className="fab fa-instagram" />{' '}
                                </a>
                                <a href={social[1].url}>
                                    <i className="fab fa-linkedin-in" />{' '}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 m-15px-tb">
                        <div className="about-me">
                            <h4>I'M {about.name}</h4>
                            <h6>
                                A <span className="theme-color">{about.title}</span> based in <span className="theme-color">{about.address}</span>
                            </h6>
                            <p>{about.description}</p>
                            <div className="row about-list">
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>Experience</label>
                                        <p>{about.exp_year} Years</p>
                                    </div>

                                    <div className="media">
                                        <label>Residence</label>
                                        <p>{about.address}</p>
                                    </div>
                                    <div className="media">
                                        <label>Address</label>
                                        <p>{about.address}</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>E-mail</label>
                                        <p>{about.contactEmail}</p>
                                    </div>
                                    <div className="media">
                                        <label>Phone</label>
                                        <p>{about.phoneNumber}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-bar">
                                <Link className="m-btn m-btn-theme" to="work">
                                    Download CV
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;
