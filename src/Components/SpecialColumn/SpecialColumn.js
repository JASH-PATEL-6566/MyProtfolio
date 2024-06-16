import React from 'react'
import Column from '../../Layout/Column';

import TypeAnimation from '../TypeAnimation/TypeAnimation';
import Row from '../../Layout/Row';

function SpecialColumn({ symbol, title, descriptionHeading, description }) {
    return (
        <Row className='special-row'>
            <Column flexType='row' justify='start' className={"align-items-center gap-3 special-border special-column"}>
                <p className='mid_fonts'>&#123;{symbol}&#125;</p>
                <TypeAnimation color={"blue"} size={"mid"} texts={[title]} time={4} />
            </Column>
            <Column className={"special-border py-4"}>
                {descriptionHeading !== "" ? <p className="white_color small_fonts">&#47;&#47;{descriptionHeading}</p> : <></>}
                <p className='yellow_color vsmall_fonts'>{description}</p>
            </Column>
        </Row>
    )
}

export default SpecialColumn;