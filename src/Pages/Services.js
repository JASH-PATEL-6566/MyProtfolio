import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from '../Layout/BaseLayout';
import PageStarting from '../Components/PageStarting/PageStarting';
import AllServices from '../Components/AllServices/AllServices';
import ContactBottom from '../Components/ContactBottom/ContactBottom';

function Services() {
    return (
        <BaseLayout>
            <PageStarting title={"qualification"} isImage={false} disSize={"vsmall"} discription={"I have consistently excelled academically, demonstrating strong analytical and problem-solving skills. My dedication to learning has provided me with a solid foundation in various technologies and development practices."} />
            <AllServices />
            <ContactBottom />
        </BaseLayout>
    )
}

export default Services;