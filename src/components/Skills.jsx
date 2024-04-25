import { useEffect } from 'react';
import { tony } from '../layouts/utils';

const Skills = ({ skills }) => {
    useEffect(() => {
        tony.activeSkillProgress();
    }, []);
    return (
        <section className="section">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">My Skills</h3>
                            <p className="text-uppercase small">A Lead UX &amp; UI designer based in Canada</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-lg-6 m-15px-tb">
                        {/* skill */}
                        {skills.map((skill, index) => (
                            <div className="skill-lt">
                                <h6 className="dark-color">{skill.name}</h6>
                                <div className="skill-bar">
                                    <div
                                        className="skill-bar-in theme-bg"
                                        role="progressbar"
                                        aria-valuenow={skill.percentage}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <span>{skill.percentage}%</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* end skill */}
                    </div>
                    <div className="col-lg-5 m-15px-tb">
                        <div className="row">
                            <div className="col-6 m-15px-tb">
                                <div className="feature-box-2 media align-items-center">
                                    <div className="icon">
                                        <i className="fas fa-compact-disc" />
                                    </div>
                                    <div className="media-body">
                                        <h5>80 Albumes Listened</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 m-15px-tb">
                                <div className="feature-box-2 media align-items-center">
                                    <div className="icon">
                                        <i className="fas fa-trophy" />
                                    </div>
                                    <div className="media-body">
                                        <h5>15 Awards Won</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 m-15px-tb">
                                <div className="feature-box-2 media align-items-center">
                                    <div className="icon">
                                        <i className="fas fa-mug-hot" />
                                    </div>
                                    <div className="media-body">
                                        <h5>1 000 Cups of coffee</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 m-15px-tb">
                                <div className="feature-box-2 media align-items-center">
                                    <div className="icon">
                                        <i className="fas fa-flag" />
                                    </div>
                                    <div className="media-body">
                                        <h5>10 Countries Visited</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Skills;
