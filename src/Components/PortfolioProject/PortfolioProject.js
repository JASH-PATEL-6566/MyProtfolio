import React from 'react'
import ProjectElement from '../ProjectElement/ProjectElement';
import image from "../../Assets/image1.jpg";

function PortfolioProject() {
    const data = [
        {
            image: image,
            title: "EaseProf",
            discription: "ahsdkjha skjdhkj ahsdkjh akjsdhjk ahsdkjh akjhsdj ahkjsdhkj ahsdkjh kajshdkj haskjhdkj hasdkh kahsdkah skdha",
            code_link: "https://github.com/JASH-PATEL-6566/MyProtfolio",
            live_link: "https://github.com/JASH-PATEL-6566/MyProtfolio"
        },
        {
            image: image,
            title: "EaseProf",
            discription: "ahsdkjha skjdhkj ahsdkjh akjsdhjk ahsdkjh akjhsdj ahkjsdhkj ahsdkjh kajshdkj haskjhdkj hasdkh kahsdkah skdha",
            code_link: "https://github.com/JASH-PATEL-6566/MyProtfolio",
            live_link: "https://github.com/JASH-PATEL-6566/MyProtfolio"
        },
        {
            image: image,
            title: "EaseProf",
            discription: "ahsdkjha skjdhkj ahsdkjh akjsdhjk ahsdkjh akjhsdj ahkjsdhkj ahsdkjh kajshdkj haskjhdkj hasdkh kahsdkah skdha",
            code_link: "https://github.com/JASH-PATEL-6566/MyProtfolio",
            live_link: "https://github.com/JASH-PATEL-6566/MyProtfolio"
        },
        {
            image: image,
            title: "EaseProf",
            discription: "ahsdkjha skjdhkj ahsdkjh akjsdhjk ahsdkjh akjhsdj ahkjsdhkj ahsdkjh kajshdkj haskjhdkj hasdkh kahsdkah skdha",
            code_link: "https://github.com/JASH-PATEL-6566/MyProtfolio",
            live_link: "https://github.com/JASH-PATEL-6566/MyProtfolio"
        },
        {
            image: image,
            title: "EaseProf",
            discription: "ahsdkjha skjdhkj ahsdkjh akjsdhjk ahsdkjh akjhsdj ahkjsdhkj ahsdkjh kajshdkj haskjhdkj hasdkh kahsdkah skdha",
            code_link: "https://github.com/JASH-PATEL-6566/MyProtfolio",
            live_link: "https://github.com/JASH-PATEL-6566/MyProtfolio"
        },
        {
            image: image,
            title: "EaseProf",
            discription: "ahsdkjha skjdhkj ahsdkjh akjsdhjk ahsdkjh akjhsdj ahkjsdhkj ahsdkjh kajshdkj haskjhdkj hasdkh kahsdkah skdha ahsdkjha skjdhkj ahsdkjh akjsdhjk ahsdkjh akjhsdj ahkjsdhkj ahsdkjh kajshdkj haskjhdkj hasdkh",
            code_link: "https://github.com/JASH-PATEL-6566/MyProtfolio",
            live_link: "https://github.com/JASH-PATEL-6566/MyProtfolio"
        }
    ]
    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            {data.map((item, index) => (
                <ProjectElement image={item.image} title={item.title} discription={item.discription} code_link={item.code_link} live_link={item.live_link} reverse={index % 2 === 0 ? false : true} />
            ))}
        </div>
    )
}

export default PortfolioProject;