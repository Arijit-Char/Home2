import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import { motion, AnimatePresence } from 'framer-motion';
import '../App.scss';

const Work = ({ work, about }) => {
    const isotope = useRef();
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope('.portfolio-content', {
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item',
                },
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                },
            });
        }, 1000);
    }, []);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="work" className="section">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">LATEST WORKS</h3>
                            <p className="text-uppercase small">
                                A {about.title} based in {about.address}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="portfolio-content lightbox-gallery">
                    {work.map((project, index) => (
                        <div className="grid-item product branding" key={index}>
                            <div className="portfolio-box-01" onClick={() => handleProjectClick(project)}>
                                <div className="portfolio-img">
                                    <img src={project.image.url} alt="image" />
                                    <motion.div
                                        className="portfolio-hover"
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '1rem',
                                        }}
                                    >
                                        <h5>{project.title}</h5>
                                        <div className="project-links">
                                            <a href={project.liveurl} target="_blank" rel="noopener noreferrer" style={{ margin: '1.5rem' }}>
                                                <i className="fas fa-external-link-alt"></i>
                                            </a>
                                            <a href={project.githuburl} target="_blank" rel="noopener noreferrer" style={{ margin: '1.5rem' }}>
                                                <i className="fab fa-github"></i>
                                            </a>
                                        </div>
                                        <div className="more">
                                            <button onClick={() => handleProjectClick(project)}>More Details...</button>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="modal">
                        <motion.div initial={{ y: -50 }} animate={{ y: 0 }} exit={{ y: -50 }} className="modal-content">
                            <span className="close" onClick={handleCloseModal}>
                                &times;
                            </span>
                            <h2 style={{fontSize:"1.5rem",fontWeight:"600",padding:"0.75rem"}}>{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>
                            <div className="project-links">
                                <a href={selectedProject.liveurl} target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-external-link-alt"  style={{ margin: '1.5rem' }}></i>
                                </a>
                                <a href={selectedProject.githuburl} target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"  style={{ margin: '1.5rem' }}></i>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Work;
