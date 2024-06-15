import React from 'react'
import Title from '../Title/Title';
import LinkButton from '../LinkButton/LinkButton';
import OneTimeTypeAnimation from '../OneTimeTypeAnimation/OneTimeTypeAnimation';

function ServicesHome() {
    return (
        <>
            <Title symbol={"#"} title={"Services"} discription={"aksjdh akjsdh kasdh kajsdhk ajhsdk ahsd abjdgh a"} />
            <div className="d-flex flex-column align-items-center">
                <div className="w-100 all-border d-flex justify-content-center align-items-center mb-3 hover-yellow">
                    <OneTimeTypeAnimation size="avg" text={"_web designer"} time={6} color={"blue"} />
                </div>
                <div className="w-100 all-border d-flex justify-content-center align-items-center mb-3 hover-yellow">
                    <OneTimeTypeAnimation size="avg" text={"_back-end developer"} time={6} color={"sky-blue"} />
                </div>
                <div className="w-100 all-border d-flex justify-content-center align-items-center mb-3 hover-blue">
                    <OneTimeTypeAnimation size="avg" text={"_full-stack developer"} time={6} color={"yellow"} />
                </div>
                <LinkButton content={"all_services"} to={"./services"} />
            </div>
        </>
    )
}

export default ServicesHome;