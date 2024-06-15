import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from '../Layout/BaseLayout';
import TypeAnimation from '../Components/TypeAnimation/TypeAnimation';
import FixImage from '../Components/FixImage/FixImage';
import image from "../Assets/image1.jpg";
import Title from '../Components/Title/Title';
import LinkButton from '../Components/LinkButton/LinkButton';
import Column from '../Layout/Column';
import Row from '../Layout/Row';
import HomeAbout from '../Components/HomeAbout/HomeAbout';
import PortfolioHome from '../Components/PortfolioHome/PortfolioHome';


function Root() {
    return (
        <BaseLayout>
            <FixImage image={image}>
                <div className='d-flex flex-column dark_background align-items-center justify-content-center py-5'>
                    <p className='vsmall_fonts' style={{ letterSpacing: '4px' }}>&#47;&#47;&nbsp;&nbsp;Hi, I'M Jash Patel, A ....</p>
                    <TypeAnimation texts={["_Full stack webdeveloper", "_Web Designer", "_Backend Developer"]} color="blue" size="vbig" time={6} />
                </div>
            </FixImage>

            {/* About Section */}
            <HomeAbout />

            {/* Portfolio Section */}
            <PortfolioHome />

        </BaseLayout >
    );
}

export default Root;
