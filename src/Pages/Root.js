import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from '../Layout/BaseLayout';
import TypeAnimation from '../Components/TypeAnimation/TypeAnimation';
import FixImage from '../Components/FixImage/FixImage';
import image from "../Assets/image1.jpg";

function Root() {
    return (
        <BaseLayout>
            <FixImage image={image}>
                <div className='d-flex flex-column dark_background align-items-center justify-content-center py-5'>
                    <p className='small_fonts' style={{ letterSpacing: '4px' }}>&#47;&#47;&nbsp;&nbsp;Hi, I'M Jash Patel, A ....</p>
                    <TypeAnimation text="Full stack webdeveloper" color="blue" size="big" time={6} />
                </div>
            </FixImage>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>

        </BaseLayout >
    );
}

export default Root;
