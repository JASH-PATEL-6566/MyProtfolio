import React from 'react'
import Title from '../Title/Title';
import Row from '../../Layout/Row';
import Column from '../../Layout/Column';
import LinkButton from '../LinkButton/LinkButton';


function AboutHome() {
    return (
        <>
            <Title symbol={"/"} title={"about_me"} discription={"ajsda aksjd aksdh kasdhkahsdk haksd  aksjdh akjdhak jdshkaj dshk asd"} />
            <div className="d-flex flex-column justify-content-center align-items-center">
                <Row>
                    <Column className="align-items-center column-border text-decoration-underline mid_fonts">
                        <p className='w-75 py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae consequuntur fugiat ullam quia, voluptatem explicabo ad corporis aperiam? Quae, ea.</p>
                    </Column>
                    <Column className="align-items-center small_fonts">
                        <p className='w-75 py-5 yellow_color' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum distinctio velit dolore consequuntur sapiente quas ipsa aut consequatur doloribus fugiat similique, sunt enim mollitia quam, nemo earum illum doloremque </p>
                    </Column>
                </Row>
                <LinkButton to={"./about"} content={"read_more"} />
            </div>
        </>
    )
}

export default AboutHome;