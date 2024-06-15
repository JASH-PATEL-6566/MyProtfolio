import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from '../Layout/BaseLayout';
import TypeAnimation from '../Components/TypeAnimation/TypeAnimation';
import FixImage from '../Components/FixImage/FixImage';
import image from "../Assets/image1.jpg";
import Title from '../Components/Title/Title';
import LinkButton from '../Components/LinkButton/LinkButton';

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
            <Title symbol={"/"} title={"about_me"} discription={"ajsda aksjd aksdh kasdhkahsdk haksd  aksjdh akjdhak jdshkaj dshk asd"} />
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="row">
                    <div className="col md-2 d-flex justify-content-center align-item-center small_fonts text-decoration-underline" style={{ borderRight: '1px solid var(--back-groud-light-color)' }}>
                        <p className='w-75 py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae consequuntur fugiat ullam quia, voluptatem explicabo ad corporis aperiam? Quae, ea.</p>
                    </div>
                    <div className="col md-2 d-flex justify-content-center align-items-center vvsmall_fonts">
                        <p className='w-75 py-5 yellow_color' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum distinctio velit dolore consequuntur sapiente quas ipsa aut consequatur doloribus fugiat similique, sunt enim mollitia quam, nemo earum illum doloremque hic esse id at temporibus voluptate repellendus. Facere sunt labore doloremque?</p>
                    </div>
                </div>
                <LinkButton to={"./about"} content={"read_more"} />
            </div>

            {/* Portfolio Section */}
            <Title symbol={"!"} title={"protfolio"} discription={"aksjdh akjsdh kasdh kajsdhk ajhsdk ahsd abjdgh a"} />
        </BaseLayout >
    );
}

export default Root;
