import { useEffect } from 'react';
import { tony } from '../layouts/utils';

const Skills = ({ skills, about }) => {
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
                            <p className="text-uppercase small">
                                {' '}
                                A {about.title} based in {about.address}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-lg-6 m-15px-tb">
                        {/* skill */}
                        {skills.map((skill, index) => (
                            <div className="skill-lt">
                                <h6 className="dark-color" style={{display:"flex",gap:"2px"}}>
                                    <div>{skill.name}</div>
                                    <div>
                                        <img  style={{ width: '1.5vw' }} src={skill.image.url} alt="" />
                                    </div>
                                </h6>

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
                </div>
            </div>
        </section>
    );
};
export default Skills;
