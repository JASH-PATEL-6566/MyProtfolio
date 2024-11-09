import React from 'react'
import Column from '../../Layout/Column';
import Row from '../../Layout/Row';

function WhatDriveMyWork() {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <Row className="all-border">
                <Column className="column-border py-5 px-5">
                    <p className="small_fonts blue_color m-0">&#123;&#47;&#125;</p>
                    <p className="avg_fonts white_color m-0">_team work</p>
                    <p className='yellow_color m-0'>I thrive in collaborative environments, working efficiently with teams to achieve shared goals. I believe that great results come from synergy, active communication, and mutual respect.</p>
                </Column>
                <Column className="py-5 px-5">
                    <p className="small_fonts blue_color m-0">&#123;&#33;&#125;</p>
                    <p className="avg_fonts white_color m-0">_innovation</p>
                    <p className='yellow_color m-0'>I enjoy thinking creatively and approaching problems from new perspectives. Whether brainstorming solutions or implementing ideas, I continuously look for ways to improve and innovate.</p>
                </Column>
            </Row>
            <Row className="all-border">
                <Column className="column-border py-5 px-5">
                    <p className="small_fonts blue_color m-0">&#123;&#35;&#125;</p>
                    <p className="avg_fonts white_color m-0">_excellence</p>
                    <p className='yellow_color m-0'>I strive for high standards in everything I do, ensuring quality and precision. For me, excellence is about going beyond expectations and maintaining consistency across tasks.</p>
                </Column>
                <Column className="py-5 px-5">
                    <p className="small_fonts blue_color m-0">&#123;&#37;&#125;</p>
                    <p className="avg_fonts white_color m-0">_hard work</p>
                    <p className='yellow_color m-0'>I am committed to putting in the effort required to get things done. My dedication and perseverance help me tackle challenges and complete projects with efficiency and focus.</p>
                </Column>
            </Row>
        </div>
    )
}

export default WhatDriveMyWork;