import Isotope from 'isotope-layout';
import { useEffect, useRef, useState } from 'react';

const Work = ({ work, about }) => {
    // Isotope
    const isotope = useRef();
    const [filterKey, setFilterKey] = useState('*');
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope('.portfolio-content', {
                itemSelector: '.grid-item',
                //    layoutMode: "fitRows",
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
        //     return () => isotope.current.destroy();
    }, []);
    return (
        <section id="work" className="section">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">LATEST WORKS</h3>
                            <p className="text-uppercase small">
                                A {about.title} based in {about.address}{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="portfolio-content lightbox-gallery">
                    {work.map((project) => (
                        <div className="grid-item product branding">
                            <div className="portfolio-box-01">
                                <div className="portfolio-img">
                                    <img src={project.image.url} alt="image" />
                                </div>
                                <div className="portfolio-info">
                                    <h5>{project.title}</h5>
                                    <span>{project.description}</span>
                                </div>
                                <a className="link-overlay" href={project.liveurl} />
                            </div>
                        </div>
                    ))}
            <div className="work1" style={{height:"0",width:"0"}}></div>

                    {/* grid item */}
                </div>{' '}
                {/* portfolio-content */}
            </div>

        </section>
    );
};
export default Work;
