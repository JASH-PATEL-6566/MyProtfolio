import React from 'react'
import Title from '../Title/Title';
import Row from '../../Layout/Row';
import Column from '../../Layout/Column';
import { Image } from 'react-bootstrap';
import image from "../../Assets/portfolio_test.jpg";
import ImageDetails from '../ImageDetails/ImageDetails';


function PortfolioHome() {
    return (
        <>
            <Title symbol={"!"} title={"protfolio"} discription={"aksjdh akjsdh kasdh kajsdhk ajhsdk ahsd abjdgh a"} />
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
            </div>
        </>
    )
}

export default PortfolioHome;