import React from 'react'
import Row from '../../Layout/Row';
import Column from '../../Layout/Column';
import { Image } from 'react-bootstrap';
import AButton from '../LinkButton/AButton';
import BButton from '../LinkButton/BButton';

function ProjectElement({ image, title, discription, code_link, live_link, reverse }) {
    return (
        <>
            <Row className={`top-border py-4 ${reverse ? 'flex-row-reverse' : ''}`}>
                <Column className={"p-0 my-3 overflow-hidden"}>
                    <Image src={image} className='imagehover' />
                </Column>
                <Column className={"py-3 px-2"} justify='justify-content-start'>
                    <p className='big_fonts m-0'>&#47;&#47; {title}</p>
                    <p className='vsmall_fonts yellow_color' style={{ textAlign: 'justify' }}>{discription}</p>
                    <div className="d-flex align-items-center justify-content-start gap-4">
                        <AButton content={"_code"} to={code_link} />
                        {live_link !== "" ? <BButton content={"_live"} to={live_link} /> : <></>}
                    </div>
                </Column>
            </Row>
        </>
    )
}

export default ProjectElement;