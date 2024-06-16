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
                    <p className='yellow_color m-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, id et. Vitae deserunt temporibus ipsa qui debitis autem accusantium laborum?</p>
                </Column>
                <Column className="py-5 px-5">
                    <p className="small_fonts blue_color m-0">&#123;&#33;&#125;</p>
                    <p className="avg_fonts white_color m-0">_team work</p>
                    <p className='yellow_color m-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, id et. Vitae deserunt temporibus ipsa qui debitis autem accusantium laborum?</p>
                </Column>
            </Row>
            <Row className="all-border">
                <Column className="column-border py-5 px-5">
                    <p className="small_fonts blue_color m-0">&#123;&#35;&#125;</p>
                    <p className="avg_fonts white_color m-0">_team work</p>
                    <p className='yellow_color m-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, id et. Vitae deserunt temporibus ipsa qui debitis autem accusantium laborum?</p>
                </Column>
                <Column className="py-5 px-5">
                    <p className="small_fonts blue_color m-0">&#123;&#37;&#125;</p>
                    <p className="avg_fonts white_color m-0">_team work</p>
                    <p className='yellow_color m-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, id et. Vitae deserunt temporibus ipsa qui debitis autem accusantium laborum?</p>
                </Column>
            </Row>
        </div>
    )
}

export default WhatDriveMyWork;