import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from '../Layout/BaseLayout';
import PageStarting from '../Components/PageStarting/PageStarting';
import Title from '../Components/Title/Title';
import ContactBottom from '../Components/ContactBottom/ContactBottom';
import WhatDriveMyWork from '../Components/WhatDriveMyWork/WhatDriveMyWork';

function About() {
    return (
        <BaseLayout>
            <PageStarting title={"about_me"} disSize={"mid"} discription={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit deleniti inventore eum commodi debitis pariatur magnam quia, iste ipsam maiores numquam harum, culpa"}>
                <p className="vsmall_fonts white_color text-center" style={{ width: '60%' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit deleniti inventore eum commodi debitis pariatur magnam quia, iste ipsam maiores numquam harum, culpa aliquam mollitia quam corporis necessitatibus. Quos nostrum molestias minus veritatis, debitis ab, voluptas ex porro non quis veniam! Magnam, eum.</p>
            </PageStarting>
            <Title symbol={""} title={"what drives my work"} discription={""} />
            <WhatDriveMyWork />
            <ContactBottom />
        </BaseLayout>
    )
}

export default About;   