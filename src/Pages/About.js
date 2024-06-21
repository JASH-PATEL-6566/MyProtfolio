import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from '../Layout/BaseLayout';
import PageStarting from '../Components/PageStarting/PageStarting';
import Title from '../Components/Title/Title';
import ContactBottom from '../Components/ContactBottom/ContactBottom';
import WhatDriveMyWork from '../Components/WhatDriveMyWork/WhatDriveMyWork';

function About() {
    return (
        <BaseLayout>
            <PageStarting title={"about_me"} disSize={"mid"} discription={"21 year old passionate developer from India."}>
                <p className="vsmall_fonts white_color text-center" style={{ width: '70%' }}>My journey into development started with a curiosity about website functionality and a passion for crafting interactive user experiences. I've since delved into diverse programming languages, frameworks, and tools, continually evolving to stay current with technology's rapid advancements.</p>
            </PageStarting>
            <Title symbol={""} title={"what drives my work"} discription={""} />
            <WhatDriveMyWork />
            <ContactBottom />
        </BaseLayout>
    )
}

export default About;   