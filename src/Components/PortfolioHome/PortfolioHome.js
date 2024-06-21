import React from 'react'
import Title from '../Title/Title';
import Row from '../../Layout/Row';
import Column from '../../Layout/Column';
import { Image } from 'react-bootstrap';
import image from "../../Assets/portfolio_test.jpg";
import ImageDetails from '../ImageDetails/ImageDetails';
import LinkButton from '../LinkButton/LinkButton';


function PortfolioHome() {
    return (
        <>
            <Title symbol={"!"} title={"portfolio"} discription={"...these are some of my valuable projects"} />
            <div className="d-flex flex-column justify-content-center align-items-center">
                <Row className="all-border">
                    <Column className="align-items-center column-border py-5">
                        <Image src={image} className='w-50' />
                        <ImageDetails
                            title="Project1"
                            discription="lorem akjsdh aksjdh kasdhk asd sjdkfsjdfl"
                        />
                    </Column>
                    <Column className="align-items-center py-5">
                        <Image src={image} className='w-50' />
                        <ImageDetails
                            title="Project2"
                            discription="lorem akjsdh aksjdh kasdhk asd sjdkfsjdfl"
                        />
                    </Column>
                </Row>
                <Row className="all-border">
                    <Column className="align-items-center column-border py-5">
                        <Image src={image} className='w-50' />
                        <ImageDetails
                            title="Project1"
                            discription="lorem akjsdh aksjdh kasdhk asd sjdkfsjdfl"
                        />
                    </Column>
                    <Column className="align-items-center py-5">
                        <Image src={image} className='w-50' />
                        <ImageDetails title="Project2" discription="lorem akjsdh aksjdh kasdhk asd sjdkfsjdfl" />
                    </Column>
                </Row>
                <LinkButton to={"/portfolio"} content={"read_more"} className={"mt-4"} />
            </div>
        </>
    )
}

export default PortfolioHome;