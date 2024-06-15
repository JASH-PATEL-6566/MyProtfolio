import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from '../Layout/BaseLayout';
import TypeAnimation from '../Components/TypeAnimation/TypeAnimation';
import FixImage from '../Components/FixImage/FixImage';
import image from "../Assets/image1.jpg";
import AboutHome from '../Components/AboutHome/AboutHome';
import PortfolioHome from '../Components/PortfolioHome/PortfolioHome';
import ServicesHome from '../Components/ServicesHome/ServicesHome';
import ContactBottom from "../Components/ContactBottom/ContactBottom";

function Root() {
    return (
        <BaseLayout>
            <FixImage image={image} height={32}>
                <div className='d-flex flex-column dark_background align-items-center justify-content-center py-5'>
                    <p className='vsmall_fonts' style={{ letterSpacing: '4px' }}>&#47;&#47;&nbsp;&nbsp;Hi, I'M Jash Patel, A ....</p>
                    <TypeAnimation texts={["_Full stack webdeveloper", "_Web Designer", "_Backend Developer"]} color="blue" size="avg" time={4} />
                </div>
            </FixImage>

            {/* About Section */}
            <AboutHome />

            {/* Portfolio Section */}
            <PortfolioHome />

            {/* Services Section */}
            <ServicesHome />

            {/* Contact Section */}
            <ContactBottom />


        </BaseLayout >
    );
}

export default Root;
