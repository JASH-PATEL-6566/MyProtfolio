import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from '../Layout/BaseLayout';
import TypeAnimation from '../Components/TypeAnimation/TypeAnimation';
import FixImage from '../Components/FixImage/FixImage';
import image from "../Assets/image1.jpg";
import AboutHome from '../Components/AboutHome/AboutHome';
import PortfolioHome from '../Components/PortfolioHome/PortfolioHome';
import ContactBottom from "../Components/ContactBottom/ContactBottom";
import SkillContainer from '../Components/SkillContainer/SkillContainer';
import AButton from '../Components/LinkButton/AButton';

function Root() {
    return (
        <BaseLayout>
            <FixImage image={image} height={32}>
                <div className='d-flex flex-column dark_background align-items-center justify-content-center py-5'>
                    <p className='vsmall_fonts' style={{ letterSpacing: '4px' }}>&#47;&#47;&nbsp;&nbsp;Hi, I'M Jash Patel, A ....</p>
                    <TypeAnimation texts={["_full stack webdeveloper", "_web designer", "_backend developer", "_app developer"]} color="blue" size="avg" time={4} />
                </div>
            </FixImage>
            <div className="d-flex align-items-center justify-content-center mt-4">
                <AButton content={" 📃 download_resume "} to={"https://drive.google.com/file/d/1D4BJ4hoQfzV5vkggj5uTyXzOkNVxozxN/view?usp=sharing"} />
            </div>
            {/* About Section */}
            <AboutHome />

            {/* Portfolio Section */}
            <PortfolioHome />

            {/* Services Section */}
            {/* <ServicesHome /> */}
            <SkillContainer />

            {/* Contact Section */}
            <ContactBottom />


        </BaseLayout >
    );
}

export default Root;
