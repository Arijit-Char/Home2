const Blog = ({ services , about}) => {
    return (
        <section id="blog" className="section white-bg">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">Latest Blogs</h3>
                            <p className="text-uppercase small">
                                A {about.title} based in {about.address}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {services.map((service) => (
                        <div className="col-lg-4 m-15px-tb">
                            <div className="blog-grid">
                                <div className="blog-grid-img">
                                    <a href="#">
                                        <img src={service.image.url} alt="image" />
                                    </a>
                                </div>
                                <div className="blog-gird-info">
                                    <div className="b-meta">
                                        <span className="date">02 Mar 2023</span>
                                        <span className="meta">{service.name}</span>
                                    </div>
                                    <h5>
                                        <a href="#">{service.description}</a>
                                    </h5>
                                    <p>{service.description}</p>
                                    <div className="btn-grid">
                                        <a className="m-btn-link" href="#">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* col */}
                </div>
            </div>
        </section>
    );
};
export default Blog;
