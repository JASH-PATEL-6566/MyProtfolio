import React from 'react'
import Title from '../Title/Title';
import Row from '../../Layout/Row';
import Column from '../../Layout/Column';
import LinkButton from '../LinkButton/LinkButton';


function AboutHome() {
    return (
        <>
            <Title symbol={"/"} title={"about_me"} discription={"...a passionate full-stack developer with a knack for creating efficient, scalable, and user-friendly web applications."} />
            <div className="d-flex flex-column justify-content-center align-items-center">
                <Row>
                    <Column className="align-items-center column-border text-decoration-underline mid_fonts">
                        <p className='w-75 py-5'>
                            With 2 years of experience in the industry, I have honed my skills in both front-end and back-end technologies, allowing me to build comprehensive solutions from the ground up.
                        </p>
                    </Column>
                    <Column className="align-items-center small_fonts">
                        <p className='w-75 py-5 yellow_color' style={{ textAlign: 'justify' }}>
                            Throughout my career, I've completed projects ranging from small business websites to large-scale enterprise applications. I thrive in collaborative environments and enjoy solving complex problems with innovative solutions. My goal is to continuously learn and grow as a developer, contributing to impactful projects.
                        </p>
                    </Column>
                </Row>
                <LinkButton to={"./about"} content={"read_more"} />
            </div>
        </>
    )
}

export default AboutHome;